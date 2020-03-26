FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install
RUN yarn global add nodemon

EXPOSE 8081
CMD [ "npm", "run", "start" ]

