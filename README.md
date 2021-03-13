# Nuxt-Test-Project

## Before installation
Copy .env.example to .env

## Build dev (with Docker)
```bash
$ docker-compose up -d
# You will be able to access the website from http://localhost:3000
# You can change port in .env file
```

## Build dev (without Docker)

```bash
$ yarn install
$ yarn dev
```

## Build Production
```bash 
# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Run Test
```bash 
$ yarn test
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
