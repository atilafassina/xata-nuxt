# Xata Nuxt 3 minimal starter

This is a bare bones example of Xata and Nuxt 3

## Setup

> Examples use `pnpm` but you can also use `yarn` or `npm`.

Shallow copy this repository.

```
pnpx degit atilafassina/xata-nuxt
```

Install dependencies:

```
pnpm i
```

Once this is done, you can install the Xata CLI and initialize the DB.
(this project is using the sample blog post db, and schema can be found at `schema.example.json`).

Otherwise, you can use `pnpm dlx` for it:

```
pnpm -s dlx @xata.io/cli@latest --schema=schema.example.json --output=lib/xata.codegen.ts
```

Once this is done and code is generated, you can start the development server on `http://localhost:3000`:
