// import { inferAsyncReturnType } from '@trpc/server';
// import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
// // Reference required for compilation
// import db from '../../../../packages/database/utils/prisma';
import prisma from 'packages/database/utils/prisma';

// // eslint-disable-next-line @typescript-eslint/require-await
// export async function createContextInner() {
//   return {};
// }

// // eslint-disable-next-line @typescript-eslint/require-await
// export async function createContext({ req, res }: CreateFastifyContextOptions) {
//   const server = req.server;
//   return {
//     db,
//     fastify: server,
//     req,
//     res,
//   };
// }

// export type Context = inferAsyncReturnType<typeof createContext>;
// export type InnerContext = inferAsyncReturnType<typeof createContextInner>;

import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

export const createContext = ({ req, res }: CreateFastifyContextOptions) => {
  return { req, res, db: prisma };
};

export type Context = inferAsyncReturnType<typeof createContext>;
