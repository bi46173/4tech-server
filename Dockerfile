# Use a Node.js base image with version 18.16
FROM node:18.16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app is listening on (4000 in this case)
EXPOSE 4000

# Set the command to run your app
CMD ["yarn", "start"]
