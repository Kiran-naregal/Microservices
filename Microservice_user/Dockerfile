FROM node:17-alpine

WORKDIR /server_app

COPY package.json .

RUN npm install 

RUN npm install nodemon

COPY . .

EXPOSE 1999

CMD ["npm","start"]