# Step 1: Use the official Node.js image as the base image
FROM node:18

# Step 2: Set the working directory for the backend application
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install all dependencies for the backend
RUN npm install

# Step 5: Copy the rest of the backend source code into the container
COPY . .

# Step 6: Expose the port for the backend (default is 5000)
EXPOSE 5000

# Step 7: Start the backend server in development mode using nodemon
CMD ["npm", "run", "dev"]
