import * as z from 'zod';

export const signUpSchema = z.object({
  firstname: z.string().min(4).max(31),
  lastname: z.string().min(4).max(31),
  email: z.string().email(),
  password: z.string().min(4).max(31),
});

export const signInSchema = signUpSchema.omit({
  firstname: true,
  lastname: true,
});

export type signUpType = z.infer<typeof signUpSchema>;
export type signInType = z.infer<typeof signInSchema>;
