FROM node:10
WORKDIR /Users/sanjanadas/Documents/tmp
COPY package*.json ./
RUN npm install
COPY . /Users/sanjanadas/Documents/tmp
EXPOSE 3500
CMD node server.js