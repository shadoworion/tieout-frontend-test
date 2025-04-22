import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { RequestDocument } from "graphql-request";
import { client } from "../graphql/client";

type QueryProps<TQueryFnData, V, TData = TQueryFnData> = {
  query: RequestDocument;
  variables?: V;
  options?: Omit<
    UseQueryOptions<TQueryFnData, unknown, TData>,
    "queryKey" | "queryFn"
  >;
  refetchVariables?: any;
  organizationId?: string;
};

export function useCustomQuery<TQueryFnData, V, TData = TQueryFnData>({
  query,
  variables,
  options,
  refetchVariables,
  organizationId,
}: QueryProps<TQueryFnData, V, TData>) {
  return useQuery({
    queryKey: variables
      ? [query, variables, refetchVariables]
      : [query, refetchVariables],
    queryFn: async () => {
      client.setHeader("Authorization", `Bearer ag-grid-test`);
      client.setHeader(
        "B-ORGANIZATION",
        "bee03288-fe80-4503-8f4c-decd248d49c0"
      );
      return await client.request<TQueryFnData, any>(query, variables);
    },
    ...options,
  });
}
