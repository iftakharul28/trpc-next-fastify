import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client';
import { type AppRouter } from '@backend/src/utils/types';
import superjson from 'superjson';
import API_BASE_URL from 'packages/provider/url';
export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    loggerLink({
      enabled: (opts) => process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: API_BASE_URL,
    }),
  ],
});
