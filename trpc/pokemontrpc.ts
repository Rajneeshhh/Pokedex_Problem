import { initTRPC } from '@trpc/server';
import { z } from 'zod';
// import prisma from '../prisma';
// import { prisma } from '../../prisma';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const t = initTRPC.create();

const appRouter = t.router({
  getPokemon: t.procedure
    .input(z.string())
    .query(async ({ input }) => {
      return await prisma.pokemon.findUnique({
        where: { name: input },
      });
    }),


    getPokemonArray: t.procedure
    .input(z.object({
      names: z.array(z.string()),
      page: z.number().default(1), // Default page is 1
      limit: z.number().default(2), // Default limit is 2
    }))
    .query(async ({ input }) => {
      const { names, page, limit } = input;
      return await prisma.pokemon.findMany({
        where: { name: { in: names } },
        skip: (page - 1) * limit,
        take: limit,
      });
    }),

  // getPokemonArray: t.procedure
  //   .input(z.array(z.string()))
  //   .query(async ({ input }) => {
  //     return await prisma.pokemon.findMany({
  //       where: { name: { in: input } },
  //     });
  //   }),

  getPokemonByType: t.procedure
    .input(z.string())
    .query(async ({ input }) => {
      return await prisma.pokemon.findMany({
        where: { types: { has: input } },
      });
    }),
});

export type AppRouter = typeof appRouter;
export default appRouter;
