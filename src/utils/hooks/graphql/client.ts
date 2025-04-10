import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  "https://dev-server.tieout.io/graphql",
  {
    credentials: "include",
  }
);
