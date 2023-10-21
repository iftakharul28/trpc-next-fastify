import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '@backend/src/utils/types';
import superjson from 'superjson';
export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_NESTJS_SERVER}/api`,
    }),
  ],
});
