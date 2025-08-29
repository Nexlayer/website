# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

# Production stage
FROM nginx:alpine
# Install Node.js and npm
RUN apk add --update nodejs npm

# Copy Nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy built frontend files
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .

# Expose both Nginx and Socket.IO ports
EXPOSE 80 8080

# Start both Nginx and Socket.IO server
COPY start.sh /start.sh
RUN chmod +x /start.sh
CMD ["/start.sh"]