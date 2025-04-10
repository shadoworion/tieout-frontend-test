import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { RequestDocument } from "graphql-request";
import { useOrganization } from "../../globals";
import { client } from "../graphql/client";
import { useAuth } from "@clerk/clerk-react";

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
  const { getToken } = useAuth();
  return useQuery({
    queryKey: variables
      ? [query, variables, refetchVariables]
      : [query, refetchVariables],
    queryFn: async () => {
      client.setHeader("Authorization", `Bearer ${await getToken()}`);
      client.setHeader(
        "B-ORGANIZATION",
        organizationId || useOrganization.getState().organizationId
      );
      return await client.request<TQueryFnData, any>(query, variables);
    },
    ...options,
  });
}
