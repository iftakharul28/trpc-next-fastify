import { initTRPC } from '@trpc/server';
import SuperJSON from 'superjson';
import { Context } from './context';
import { ZodError } from 'zod';

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.code === 'BAD_REQUEST' && error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;
// import { initTRPC } from '@trpc/server';
// import { Context } from './context';
// export const t = initTRPC.context<Context>().create();
// export const router = t.router;
// export const publicProcedure = t.procedure;
