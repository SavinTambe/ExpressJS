FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node Ass1.js
EXPOSE 8081
