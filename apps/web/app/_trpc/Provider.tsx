import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { trpc } from "../../utils/trpc";
import { httpBatchLink } from "@trpc/client";

const queryclient = new QueryClient();
const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
  const trpcclient = trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:3000/trpc",
      }),
    ],
  });
  return (
    <div>
      <trpc.Provider client={trpcclient} queryClient={queryclient}>
        <QueryClientProvider client={queryclient}>
          {children}
        </QueryClientProvider>
      </trpc.Provider>
    </div>
  );
};

export default TRPCProvider;
