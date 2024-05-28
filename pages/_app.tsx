import { withTRPC } from '@trpc/next';
import type { AppType } from 'next/app';
import type { AppRouter } from '../trpc/pokemontrpc';
import { AppProps } from 'next/app';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { inferProcedureOutput } from '@trpc/server';

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = '/api/trpc';
    return {
      url,
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            'x-ssr': '1',
          };
        }
        return {};
      },
      links: [
        loggerLink(),
        httpBatchLink({
          url,
        }),
      ],
    };
  },
  ssr: true,
})(MyApp);
