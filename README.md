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

```bash
pnpm prisma generate
```

Build the application:

```bash
pnpm build
```

## Known Issues

When building with Nitro, you may encounter a WASM parsing error:

```
◐ Building [Nitro] (preset: node-server, compatibility: 2026-01-08)                                                                                                                                nitro 1:27:41 PM
✔ Generated public .output/public                                                                                                                                                                 nitro 1:27:41 PM
vite v8.0.0-beta.7 building nitro environment for production...
Start initial build
build started ...
... finished build of 2 collections and 14 documents in 8ms
transforming (322) node_modules/.pnpm/@tanstack+query-core@5.90.16/node_modules/@tanstack/query-core/build/modern/mutationObserver.js[unwasm] Failed to parse WASM module wasm/query_compiler_bg.postgresql.wasm-base64.mjs-8b89dafcf1c92ecf.wasm: Error: [unwasm] Failed to parse wasm/query_compiler_bg.postgresql.wasm-base64.mjs-8b89dafcf1c92ecf.wasm: Error: magic header not detected
    at parseWasm (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/nitro-nightly@3.0.1-20260109-100347-99691fcb_@electric-sql+pglite@0.3.2_chokidar@4.0.3__5e403cca83696c4801ebb787b7f605a2/node_modules/nitro-nightly/dist/_build/common.mjs:24124:9)
    at parse$2 (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/nitro-nightly@3.0.1-20260109-100347-99691fcb_@electric-sql+pglite@0.3.2_chokidar@4.0.3__5e403cca83696c4801ebb787b7f605a2/node_modules/nitro-nightly/dist/_build/common.mjs:24338:19)
    ... 3 lines matching cause stack trace ...
    at plugin.<computed> (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/rolldown@1.0.0-beta.59/node_modules/rolldown/dist/shared/bindingify-input-options-CJ8NjPpl.mjs:1046:18) {
  [cause]: CompileError2: magic header not detected
      at parseModuleHeader (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/nitro-nightly@3.0.1-20260109-100347-99691fcb_@electric-sql+pglite@0.3.2_chokidar@4.0.3__5e403cca83696c4801ebb787b7f605a2/node_modules/nitro-nightly/dist/_build/common.mjs:22828:95)
      at Object.decode2 [as decode] (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/nitro-nightly@3.0.1-20260109-100347-99691fcb_@electric-sql+pglite@0.3.2_chokidar@4.0.3__5e403cca83696c4801ebb787b7f605a2/node_modules/nitro-nightly/dist/_build/common.mjs:23860:3)
      at decode2 (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/nitro-nightly@3.0.1-20260109-100347-99691fcb_@electric-sql+pglite@0.3.2_chokidar@4.0.3__5e403cca83696c4801ebb787b7f605a2/node_modules/nitro-nightly/dist/_build/common.mjs:24110:21)
      at parseWasm (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/nitro-nightly@3.0.1-20260109-100347-99691fcb_@electric-sql+pglite@0.3.2_chokidar@4.0.3__5e403cca83696c4801ebb787b7f605a2/node_modules/nitro-nightly/dist/_build/common.mjs:24122:9)
      at parse$2 (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/nitro-nightly@3.0.1-20260109-100347-99691fcb_@electric-sql+pglite@0.3.2_chokidar@4.0.3__5e403cca83696c4801ebb787b7f605a2/node_modules/nitro-nightly/dist/_build/common.mjs:24338:19)
      at TransformPluginContextImpl.handler (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/nitro-nightly@3.0.1-20260109-100347-99691fcb_@electric-sql+pglite@0.3.2_chokidar@4.0.3__5e403cca83696c4801ebb787b7f605a2/node_modules/nitro-nightly/dist/_build/common.mjs:24420:15)
      at TransformPluginContextImpl.handler (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/vite@8.0.0-beta.7_@types+node@22.19.6_esbuild@0.25.12_jiti@2.6.1_tsx@4.21.0_yaml@2.8.2/node_modules/vite/dist/node/chunks/node.js:34567:13)
      at plugin (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/rolldown@1.0.0-beta.59/node_modules/rolldown/dist/shared/bindingify-input-options-CJ8NjPpl.mjs:624:30)
      at plugin.<computed> (file:///home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/rolldown@1.0.0-beta.59/node_modules/rolldown/dist/shared/bindingify-input-options-CJ8NjPpl.mjs:1046:18)
}
[plugin unwasm] Failed to load the WebAssembly module; falling back to module mode: Cannot resolve module "env" (from: /home/sanford/Documents/code/side-projects/prisma-nitro/node_modules/.pnpm/shiki@3.21.0/node_modules/shiki/dist/onig.wasm)
✓ 7256 modules transformed.

```
