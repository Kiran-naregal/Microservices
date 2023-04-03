FROM node:17-alpine

WORKDIR /server_app

COPY package.json .

RUN npm install 

RUN npm install nodemon

COPY . .

EXPOSE 8080

CMD ["node","index.js"]