FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production
RUN apk update && apk add bash

COPY . .

ENV PORT=${PORT}

CMD ["npm", "start"]
