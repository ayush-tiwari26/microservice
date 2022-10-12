FROM alpine:latest

RUN apk add nodejs npm
WORKDIR /
COPY . .

RUN npm i express nodemon

CMD ["npm", "start"]
