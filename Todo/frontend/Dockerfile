# Step 1: Use the official Node.js image as the base image
FROM node:18

# Step 2: Set the working directory for your application
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install all dependencies
RUN npm install

# Step 5: Copy the rest of the frontend source code into the container
COPY . .

# Step 6: Expose the port for Vite (default is 5173)
EXPOSE 5173

# Step 7: Run Vite in development mode (or use production build if required)
CMD ["npm", "run", "dev"]
