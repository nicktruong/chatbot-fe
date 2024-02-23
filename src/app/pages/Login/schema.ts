import { z } from 'zod';

export const LoginSchema = z.object({
  role: z.enum(['CUSTOMER']),
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(8, {
    message: 'Password must be longer than or equal to 8 characters',
  }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
