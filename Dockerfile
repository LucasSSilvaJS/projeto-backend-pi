FROM node:19-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g ts-node

COPY . .