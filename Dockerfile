FROM node:20.18-slim

WORKDIR /auth-example

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","run","dev" ]