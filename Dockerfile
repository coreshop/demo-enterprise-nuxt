ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .

ENV NUXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY --from=builder /app/.output ./

# The GraphQL endpoint and the shop base URL are runtime configuration, the same image
# runs against every environment:
#   NUXT_PUBLIC_API_URL   https://<shop>/pimcore-graphql-webservices/coreshop?apikey=<key>
#   NUXT_PUBLIC_BASE_URL  https://<shop>
ENV HOST=0.0.0.0 \
    PORT=3000 \
    NODE_ENV=production

EXPOSE 3000

USER node

CMD ["node", "server/index.mjs"]
