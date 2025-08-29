# -----------------------
# Build stage (Next.js)
# -----------------------
    FROM node:20-alpine AS builder
    WORKDIR /app
    
    COPY package*.json ./
    RUN npm install --legacy-peer-deps
    
    COPY . .
    RUN npm run build
    
    # -----------------------
    # Socket.IO build stage
    # -----------------------
    FROM node:20-alpine AS socket-builder
    WORKDIR /socket
    
    COPY package*.json .
    COPY tsconfig.socket.json .
    COPY lib/socketServer.ts .
    RUN npm install --legacy-peer-deps
    RUN npm install -g typescript
    RUN npm install @types/node @types/socket.io --legacy-peer-deps
    RUN tsc --project tsconfig.socket.json
    
    # -----------------------
    # Final hybrid stage (Node + Socket.IO + Nginx)
    # -----------------------
    FROM node:20-alpine AS runner
    WORKDIR /app
    
    # Copy Next.js build
    COPY --from=builder /app ./
    
    # Install only production deps
    RUN npm install --omit=dev --legacy-peer-deps
    
    # Copy Socket.IO build
    COPY --from=socket-builder /socket/dist/socketServer.js /socket/
    COPY --from=socket-builder /socket/node_modules /socket/node_modules
    
    # Install Nginx
    RUN apk add --no-cache nginx
    
    # Copy your Nginx config (keeps SPA + static route handling)
    COPY default.conf /etc/nginx/conf.d/default.conf
    
    # Copy entrypoint script
    COPY start.sh /start.sh
    RUN chmod +x /start.sh
    
    # Expose both Node (3000) + Socket.IO (8080) + Nginx (80)
    EXPOSE 80 3000 8080
    
    CMD ["/start.sh"]
    