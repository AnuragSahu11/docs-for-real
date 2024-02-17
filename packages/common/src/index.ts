import { z } from "zod";

export const UserSession = z.object({
  email: z.string(),
  name: z.string(),
  image: z.string(),
});

export type UserSessionType = z.infer<typeof UserSession>;
