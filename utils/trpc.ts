import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../trpc/pokemontrpc';

export const trpc = createTRPCReact<AppRouter>();
