import { RequestDocument } from "graphql-request";
import { client } from "./client";

export const graphRequest = async <T, V>(
  query: RequestDocument,
  variables?: V,
  skipCache?: boolean
): Promise<T> => {
  client.setHeader("Authorization", `Bearer ag-grid-test`);
  client.setHeader("B-ORGANIZATION", "bee03288-fe80-4503-8f4c-decd248d49c0");
  return await client.request<T, any>(query, variables);
};
