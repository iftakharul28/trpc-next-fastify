import * as z from 'zod';

export const envSchema = z.object({
  Frontend_PORT: z.coerce.number().int().default(5000),
  Frontend_NODE_ENV: z.string().default('development'),
  Frontend_HOST: z.string().default('localhost'),
  Dashboard_PORT: z.coerce.number().int().default(5001),
  Dashboard_NODE_ENV: z.string().default('development'),
  Dashboard_HOST: z.string().default('localhost'),
  SERVER_PORT: z.coerce.number().int().default(8000),
  SERVER_NODE_ENV: z.string().default('development'),
  SERVER_HOST: z.string().default('localhost'),
});

export const env = envSchema.parse(process.env);
