FROM node:15.2.1-alpine

ENV PORT 8080

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

COPY . .
RUN yarn install && yarn build
EXPOSE 8080

# start app
CMD [ "yarn", "start" ]
