import z from "zod";
import { Status } from "../enums/enums";

export const zUser = z.object({
  id: z.string(),
  firstname: z.string().min(3),
  lastname: z.string().min(3),
  email: z
    .string()
    .refine(
      (val) =>
        val.includes("@") &&
        val.endsWith(".com") &&
        (val.includes("gmail") || val.includes("outlook"))
    ),
  number: z.string(),
});

export type User = z.infer<typeof zUser>;
