"use client";
import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@repo/trpc/TRPC";
export const trpc = createTRPCReact<AppRouter>();
