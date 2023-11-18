# build environment
FROM node:14.15.1-alpine as builder
ARG environment
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
# RUN npm config set registry http://repo.sanbod.co/repository/npm/ --global
RUN npm install
COPY . ./
COPY .env ./.env
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
