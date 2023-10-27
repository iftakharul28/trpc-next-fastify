import helmet from '@fastify/helmet';
import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { build } from './app';
import { createContext } from './utils/context';
import { appRouter } from './routes';
import { env } from '@packages/config/env';
import { config } from '@packages/config/config';
const app = build({
  logger: config[env.SERVER_NODE_ENV].logger,
});

app.register(fastifyTRPCPlugin, {
  prefix: '/api',
  trpcOptions: {
    router: appRouter,
    createContext,
  },
});

app.register(cors, {
  origin: '*',
  credentials: true,
});

app.register(helmet);
app.get('/', async () => {
  return { data: 'hello there' };
});
if (env.SERVER_HOST) {
  app.listen(
    {
      port: env.SERVER_PORT,
      host: env.SERVER_HOST,
    },
    (err, _address) => {
      if (err) {
        app.log.error(err);
        process.exit(1);
      }
    }
  );
} else {
  app.listen(
    {
      port: env.SERVER_PORT,
    },
    (err, _address) => {
      if (err) {
        app.log.error(err);
        process.exit(1);
      }
    }
  );
}
