import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { Status } from "@repo/shared";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  todoRouter: t.router({
    createTodo: publicProcedure
      .input(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          status: z.enum([
            Status.COMPLETED,
            Status.IN_PROGRESS,
            Status.NOT_INTERESTED,
          ] as const),
        })
      )
      .output(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          status: z.enum([
            Status.COMPLETED,
            Status.IN_PROGRESS,
            Status.NOT_INTERESTED,
          ] as const),
        })
      )
      .mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
  }),
});
export type AppRouter = typeof appRouter;
