# CoreShop Enterprise Demo – Nuxt storefront

Headless storefront of the [CoreShop Enterprise Demo](https://github.com/coreshop/demo-enterprise),
built with Nuxt 4, Pinia and Apollo. It talks to the GraphQL endpoint of the CoreShop headless bundle
(`/pimcore-graphql-webservices/coreshop`) and shows categories, products, prices, the cart and a
login. A Next.js variant of the same storefront lives in
[coreshop/demo-enterprise-nextjs](https://github.com/coreshop/demo-enterprise-nextjs).

Live: https://nuxt.coreshop.dev

## Configuration

Everything is runtime configuration, the Docker image is the same for every environment:

| Variable | Description |
|---|---|
| `NUXT_PUBLIC_API_URL` | GraphQL endpoint including the DataHub api key, e.g. `https://enterprise.coreshop.dev/pimcore-graphql-webservices/coreshop?apikey=…` |
| `NUXT_PUBLIC_BASE_URL` | Base URL of the shop, used for asset and thumbnail URLs |

Copy `.env.example` to `.env` for local development.

## Local development

```bash
npm ci
npm run dev        # http://localhost:3000
npm run typecheck
npm run build && node .output/server/index.mjs
```

Regenerate the typed GraphQL operations after schema changes (needs a reachable endpoint in
`NUXT_PUBLIC_API_URL`):

```bash
npm run codegen
```

## Docker

```bash
docker build -t demo-enterprise-nuxt .
docker run --rm -p 3000:3000 \
  -e NUXT_PUBLIC_API_URL='https://enterprise.coreshop.dev/pimcore-graphql-webservices/coreshop?apikey=…' \
  -e NUXT_PUBLIC_BASE_URL='https://enterprise.coreshop.dev' \
  demo-enterprise-nuxt
```

## CI/CD

- `build.yml`: builds the image on every push and pull request; on `main` it is pushed to
  `ghcr.io/coreshop/demo-enterprise-nuxt:main-<sha>` and the tag is written to
  `headless.image` in [demo-enterprise-manifest](https://github.com/coreshop/demo-enterprise-manifest)
  via the coreshop GitHub App.
- `static.yml`: typecheck and production build.
- `dependency-update.yml`: weekly `npm update` as a pull request.
