import { createTRPCReact } from '@trpc/react-query';
import { type AppRouter } from '@backend/src/utils/types';
export const trpc = createTRPCReact<AppRouter>();
