import React, { useMemo } from 'react';
import superjson from 'superjson';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from './trpc';
import API_BASE_URL from 'packages/provider/url';
type Props = {
  children: React.ReactNode;
};
const Provider = (props: Props) => {
  const queryClient = useMemo(() => new QueryClient(), []);
  const trpcClient = useMemo(
    () =>
      trpc.createClient({
        transformer: superjson,
        links: [
          httpBatchLink({
            url: API_BASE_URL,
          }),
        ],
      }),
    []
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default Provider;
