# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port and start the application
EXPOSE 3000
CMD ["npm", "run", "start"]