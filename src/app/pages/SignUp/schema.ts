import { z } from 'zod';

export const SignUpSchema = z.object({
  role: z.enum(['CUSTOMER']),
  email: z.string().email({ message: 'Invalid email' }),
  name: z.string().min(1, { message: 'Name is required' }),
  password: z.string().min(8, {
    message: 'Password must be longer than or equal to 8 characters',
  }),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
