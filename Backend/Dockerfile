FROM node:14.18.1
WORKDIR /app
COPY package*.json ./

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
      then npm install; \
      else npm install --only=production; \
      fi

RUN npm install pm2 -g
COPY . .
EXPOSE 7777