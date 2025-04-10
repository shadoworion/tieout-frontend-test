import { RequestDocument } from "graphql-request";
import { useOrganization } from "../../globals";
import { client } from "./client";
import { BrowserClerk } from "@clerk/clerk-react";

export const graphRequest = async <T, V>(
  query: RequestDocument,
  variables?: V,
  skipCache?: boolean
): Promise<T> => {
  const token =
    (await ((window as any).Clerk as BrowserClerk).session?.getToken({
      skipCache: !!skipCache,
    })) || "none";
  client.setHeader("Authorization", `Bearer ${token}`);
  client.setHeader("B-ORGANIZATION", useOrganization.getState().organizationId);
  return await client.request<T, any>(query, variables);
};
