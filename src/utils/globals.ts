import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  Organization_SyncDocument,
  Organization_SyncMutation,
  Organization_SyncMutationVariables,
  User_PermissionsDocument,
  User_PermissionsQuery,
  User_PermissionsQueryVariables,
} from "../generated/graphql";
import { graphRequest } from "./hooks/graphql/request";
import { ExtractGQL } from "./shared";

type IOrganization = {
  organizationId: string | null;
  setOrganization: (organizationId: string | null) => Promise<void>;
};

export const useOrganization = create<IOrganization>()(
  persist(
    (set) => ({
      organizationId: null,
      setOrganization: async (organizationId: string | null) => {
        if (!!organizationId) {
          graphRequest<
            Organization_SyncMutation,
            Organization_SyncMutationVariables
          >(Organization_SyncDocument, { organizationId }).then(
            ({ organization_sync }) => {
              if (organization_sync) set({ organizationId });
            }
          );
        } else {
          set({ organizationId: null });
        }
      },
    }),
    { name: "organization" }
  )
);

type IPermissions = {
  permissions: ExtractGQL<User_PermissionsQuery>;
  hasPermissions: (value: string) => boolean;
  getPermissions: () => Promise<void>;
  resetPermissions: () => void;
};

export const usePermissions = create<IPermissions>()(
  persist(
    (set, get) => ({
      permissions: [],
      hasPermissions: (value: string) => {
        if (
          get()
            .permissions.find((item) => !item.organizationId)
            ?.permissions.includes(value)
        ) {
          return true;
        } else {
          const organizationId = useOrganization.getState().organizationId;
          return get()
            .permissions.find((item) => item.organizationId === organizationId)
            ?.permissions.includes(value);
        }
      },
      getPermissions: async () => {
        graphRequest<User_PermissionsQuery, User_PermissionsQueryVariables>(
          User_PermissionsDocument,
          {},
          true
        ).then(({ user_permissions }) => {
          set({ permissions: user_permissions });
        });
      },
      resetPermissions: () => set({ permissions: [] }),
    }),
    { name: "permissions" }
  )
);
