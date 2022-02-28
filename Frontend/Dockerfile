# Stage 1
FROM node as build
WORKDIR /Frontend
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

# Stage 2
FROM nginx
COPY --from=build /Frontend/dist /usr/share/nginx/html