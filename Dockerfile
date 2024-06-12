# Stage 1: Build Stage
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Stage 2: Production Stage
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app .

# Expose the port the app runs on
EXPOSE 8000

# Define the command to run the app
CMD ["node", "server.js"]
