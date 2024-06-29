# Stage 1: Build the application
FROM node

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

CMD ["npm", "run", "dev"] 