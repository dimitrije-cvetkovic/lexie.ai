FROM node:19-alpine

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --omit=dev

COPY . .

EXPOSE 8080
CMD ["npm", "run", "dev"]