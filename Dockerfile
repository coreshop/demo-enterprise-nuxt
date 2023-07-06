FROM node:18-alpine as builder

WORKDIR /app

RUN apk --no-cache add openssh g++ make python3 git

COPY package.json /app/
COPY package-lock.json /app/

RUN yarn install && yarn cache clean --force

ADD . /app

RUN yarn run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/.output  /app

ENV HOST 0.0.0.0
EXPOSE 3000

ENTRYPOINT ["node", "server/index.mjs"]