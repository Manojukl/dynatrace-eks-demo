# Dockerfile
# Every line is a layer in your Docker image
 
# Step 1: Start from the official Node.js 18 image
# alpine means a very small Linux base — keeps image size small
FROM node:18-alpine
 
# Step 2: Set the working directory INSIDE the container
# All following commands run from this folder
WORKDIR /app
 
# Step 3: Copy package.json first (before the rest of the code)
# This is done separately so Docker can cache the npm install step
# If only app.js changes, Docker skips re-running npm install
COPY package*.json ./
 
# Step 4: Install dependencies
# --production skips dev dependencies (smaller image)
RUN npm install --production
 
# Step 5: Copy the rest of the application files
COPY . .
 
# Step 6: Tell Docker this app uses port 3000
# This does NOT open the port — it is just documentation
EXPOSE 3000
 
# Step 7: The command to run when the container starts
CMD ["node", "app.js"]
