# Prisma Nitro

A TanStack Start application with Prisma ORM integration.

## Prerequisites

- **Node.js** (required)
- **pnpm** (package manager)

## Installation

```bash
pnpm i
```

1. Create a `.env.local` file in the project root:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/prisma_nitro?schema=public"
```

Build the application:

```bash
pnpm build
```

## Known Issues

When building with Nitro, you may encounter a WASM parsing error:

```
◐ Building [Nitro] (preset: vercel, compatibility: 2026-01-08)                                                                                                                                     nitro 1:16:24 PM
✔ Generated public .vercel/output/static                                                                                                                                                          nitro 1:16:24 PM
vite v8.0.0-beta.7 building nitro environment for production...
[unwasm] Failed to parse WASM module wasm/query_compiler_bg.postgresql.wasm-base64.mjs-8b89dafcf1c92ecf.wasm: Error: [unwasm] Failed to parse wasm/query_compiler_bg.postgresql.wasm-base64.mjs-8b89dafcf1c92ecf.wasm: Error: magic header not detected
    at parseWasm (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/nitro/dist/_build/common.mjs:24124:9)
    at parse$2 (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/nitro/dist/_build/common.mjs:24338:19)
    ... 3 lines matching cause stack trace ...
    at plugin.<computed> (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/rolldown/dist/shared/bindingify-input-options-CJ8NjPpl.mjs:1046:18) {
  [cause]: CompileError2: magic header not detected
      at parseModuleHeader (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/nitro/dist/_build/common.mjs:22828:95)
      at Object.decode2 [as decode] (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/nitro/dist/_build/common.mjs:23860:3)
      at decode2 (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/nitro/dist/_build/common.mjs:24110:21)
      at parseWasm (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/nitro/dist/_build/common.mjs:24122:9)
      at parse$2 (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/nitro/dist/_build/common.mjs:24338:19)
      at TransformPluginContextImpl.handler (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/nitro/dist/_build/common.mjs:24420:15)
      at TransformPluginContextImpl.handler (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/vite/dist/node/chunks/node.js:34567:13)
      at plugin (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/rolldown/dist/shared/bindingify-input-options-CJ8NjPpl.mjs:624:30)
      at plugin.<computed> (file:///home/sanford/Documents/code/licitei/app-licitei-next/node_modules/rolldown/dist/shared/bindingify-input-options-CJ8NjPpl.mjs:1046:18)
}
✓ 5977 modules transformed.

```
