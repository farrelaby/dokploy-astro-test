import { z } from "zod";

export const RegisterDataSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(100),
});
