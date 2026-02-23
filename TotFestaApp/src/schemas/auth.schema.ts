import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email("Email no vàlid"),
    password: z.string().min(1, "La contrasenya es obligatoria"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

