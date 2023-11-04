import type { inferRouterInputs } from '@trpc/server';
import type { inferRouterOutputs } from '@trpc/server';
import { type AppRouter } from '@backend/src/utils/types';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
