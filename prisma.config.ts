import { defineConfig, env } from 'prisma/config'

const databaseUrl = process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/prisma_nitro?schema=public'

export default defineConfig({
  schema: './prisma/schema.prisma',
  migrations: {
    path: './prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    url: databaseUrl,
  },
})
