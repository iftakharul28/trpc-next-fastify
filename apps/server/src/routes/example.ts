import { z } from 'zod';
import { publicProcedure, router } from '../utils/trpc';

export const exampleRouter = router({
  hello: publicProcedure.input(z.object({ name: z.string().nullish() })).query(({ ctx, input }) => {
    return input.name ? `hello ${input.name}` : 'hello world';
  }),
  user: publicProcedure.query(({ ctx, input }) => {
    return ctx.db.user.findMany();
  }),
});
