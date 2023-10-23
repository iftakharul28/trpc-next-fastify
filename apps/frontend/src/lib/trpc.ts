import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client';
import { type AppRouter } from '@backend/src/utils/types';
import superjson from 'superjson';
export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    loggerLink({
      enabled: (opts) => process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_NESTJS_SERVER}/api`,
    }),
  ],
});
// export const trpc = createTRPCNext<AppRouter>({
//   config({ ctx }) {
//     return {
//       queryClientConfig: {
//         defaultOptions: {
//           queries: {
//             refetchOnWindowFocus: false,
//           },
//         },
//       },
//       transformer: superjson,
//       links: [
//         loggerLink({
//           enabled: (opts) => process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
//         }),
//         httpBatchLink({ url: `${process.env.NEXT_PUBLIC_NESTJS_SERVER}/api` }),
//       ],
//     };
//   },
//   // ssr: false,
// });
