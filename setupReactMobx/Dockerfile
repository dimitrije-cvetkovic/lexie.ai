FROM node:19-alpine

# RUN mkdir -p /src
# WORKDIR /src
WORKDIR /usr/src

##COPY package.json /src/package.json
#COPY ./package.json ./package.json
COPY package*.json ./

RUN npm install
#COPY ./ /src

COPY . .

EXPOSE 3000
CMD ["npm", "run", "start:dev"]
