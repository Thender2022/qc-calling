import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  // direct database connection
  adapter: {
    url: process.env.DATABASE_URL,
  },
});
