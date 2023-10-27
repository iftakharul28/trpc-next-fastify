import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client';
import { type AppRouter } from '@backend/src/utils/types';
import superjson from 'superjson';
import { url } from '@packages/config/url';
export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    loggerLink({
      enabled: (opts) => process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      url,
    }),
  ],
});
