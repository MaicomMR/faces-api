FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

ENV PORT=${PORT}

CMD ["npm", "start"]
