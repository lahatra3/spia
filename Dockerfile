FROM node:20-alpine as spia_build

ARG REACT_APP_LOCAL_IMAGE_PATH
ARG REACT_APP_API_URL
ARG REACT_APP_CLIENT_ID_GOOGLE
ARG REACT_APP_CLIENT_USER_INFO
ARG REACT_APP_IA

WORKDIR /app

COPY package.json ./
RUN yarn install
COPY ./ ./

RUN yarn build


FROM nginx:stable-alpine

WORKDIR /var/www/html

COPY --from=spia_build /app/build/ ./

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
