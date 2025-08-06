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

export const zstatus = z.enum([
  Status.COMPLETED,
  Status.IN_PROGRESS,
  Status.NOT_INTERESTED,
] as const);

export const zTodo = z.object({
  title: z.string(),
  description: z.string().optional(),
  status: zstatus,
});

export type Todo = z.infer<typeof zTodo>;
export type User = z.infer<typeof zUser>;
