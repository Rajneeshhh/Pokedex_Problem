import { createNextApiHandler } from '@trpc/server/adapters/next';
import appRouter from '../../../trpc/pokemontrpc';

export default createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
