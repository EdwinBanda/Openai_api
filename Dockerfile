FROM node:20.11.0

WORKDIR /letsTalkProject/

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080:81

CMD [ "node", "api.js" ]