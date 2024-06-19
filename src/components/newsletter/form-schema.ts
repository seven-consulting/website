import { z } from 'zod';

export const formSchema = z.object({
  email: z
    .string({
      message: 'Email inválido',
    })
    .trim()
    .email(),
});

export type FormSchema = z.infer<typeof formSchema>;
