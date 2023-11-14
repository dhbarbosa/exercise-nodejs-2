FROM node:18.9.1

WORKDIR /usr/src/app

COPY . .
RUN npm install

EXPOSE 8080 

CMD ["sh", "-c", "sleep 60s && npm start"]

