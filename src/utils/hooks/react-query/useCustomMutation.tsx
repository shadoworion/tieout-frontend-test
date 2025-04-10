import { client } from "../graphql/client";
import { useOrganization } from "../../globals";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { RequestDocument } from "graphql-request";
import { useAuth } from "@clerk/clerk-react";

type MutationProps<T, V> = {
  mutation: RequestDocument;
  options?: Omit<UseMutationOptions<T, unknown, V, unknown>, "mutationFn">;
};

export function useCustomMutation<T, V>({
  mutation,
  options,
}: MutationProps<T, V>): UseMutationResult<T, unknown, V, unknown> {
  const { getToken } = useAuth();
  return useMutation({
    mutationFn: async (variables) => {
      client.setHeader("Authorization", `Bearer ${await getToken()}`);
      client.setHeader(
        "B-ORGANIZATION",
        useOrganization.getState().organizationId
      );
      return await client.request<T, any>(mutation, variables);
    },
    ...options,
  });
}
