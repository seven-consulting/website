import { z } from 'zod';

export const formSchema = z.object({
  firstName: z
    .string({
      message: 'Primeiro nome inválido',
    })
    .trim()
    .min(1),
  lastName: z
    .string({
      message: 'Último nome inválido',
    })
    .trim()
    .min(1),
  company: z
    .string({
      message: 'Nome da empresa inválida',
    })
    .trim(),
  email: z
    .string({
      message: 'Email inválido',
    })
    .trim()
    .email(),
  phone: z
    .string({
      message: 'Número de telefone inválido',
    })
    .trim(),
  message: z
    .string({
      message: 'Mensagem inválida',
    })
    .trim()
    .min(1),
});

export type FormSchema = z.infer<typeof formSchema>;
