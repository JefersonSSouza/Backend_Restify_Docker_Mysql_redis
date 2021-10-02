FROM node:alpine3.10

WORKDIR /usr/app
COPY . .
COPY package*.json ./
RUN npm install
EXPOSE 5000
CMD [""]