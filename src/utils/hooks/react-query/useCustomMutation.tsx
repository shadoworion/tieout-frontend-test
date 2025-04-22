import { client } from "../graphql/client";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { RequestDocument } from "graphql-request";

type MutationProps<T, V> = {
  mutation: RequestDocument;
  options?: Omit<UseMutationOptions<T, unknown, V, unknown>, "mutationFn">;
};

export function useCustomMutation<T, V>({
  mutation,
  options,
}: MutationProps<T, V>): UseMutationResult<T, unknown, V, unknown> {
  return useMutation({
    mutationFn: async (variables) => {
      client.setHeader("Authorization", `Bearer ag-grid-test`);
      client.setHeader(
        "B-ORGANIZATION",
        "bee03288-fe80-4503-8f4c-decd248d49c0"
      );
      return await client.request<T, any>(mutation, variables);
    },
    ...options,
  });
}
