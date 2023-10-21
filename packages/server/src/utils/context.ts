import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
// Reference required for compilation
import prisma from './prisma';

// eslint-disable-next-line @typescript-eslint/require-await
export async function createContextInner() {
  return {};
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function createContext({ req, res }: CreateFastifyContextOptions) {
  const server = req.server;

  return {
    db: prisma,
    fastify: server,
    req,
    res,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
export type InnerContext = inferAsyncReturnType<typeof createContextInner>;
