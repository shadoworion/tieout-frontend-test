import { Outlet } from "react-router";
import { useCustomQuery } from "../../utils/hooks/react-query/useCustomQuery";
import {
  Organization_SelfInfoDocument,
  Organization_SelfInfoQuery,
  Organization_SelfInfoQueryVariables,
} from "../../generated/graphql";
import { useOrganization } from "../../utils/globals";
import { ExtractGQL, paramsToObject } from "../../utils/shared";
import { Layout as AntLayout } from "antd";
import { Header } from "../../components/templates/Header";
import { StringParam, useQueryParam } from "use-query-params";
import { useAsyncEffect } from "ahooks";

const { Content } = AntLayout;

export type OrganizationContext = {
  organization: ExtractGQL<Organization_SelfInfoQuery> | null;
  settings: any;
  refetch: () => Promise<void>;
};

export const Layout = () => {
  const { organizationId, setOrganization } = useOrganization();

  const [changeOrgId, setChageOrgId] = useQueryParam(
    "organizationId",
    StringParam
  );

  useAsyncEffect(async () => {
    if (!!changeOrgId) {
      await setOrganization(changeOrgId).then(() => setChageOrgId(null));
    }
  }, [changeOrgId]);

  const { data: orgInfo, refetch } = useCustomQuery<
    Organization_SelfInfoQuery,
    Organization_SelfInfoQueryVariables,
    ExtractGQL<Organization_SelfInfoQuery>
  >({
    query: Organization_SelfInfoDocument,
    refetchVariables: { organizationId },
    options: {
      enabled: !!organizationId,
      select: (data) => data.organization_selfInfo,
    },
  });

  return (
    <AntLayout className="h-full">
      <Header
        homepage="/"
        menu={[]}
        userPanel={{
          menu: [],
        }}
      />
      <AntLayout>
        <Content className="flex-grow flex flex-col justify-center items-center py-5">
          <Outlet
            context={{
              organization: orgInfo,
              settings: paramsToObject(orgInfo?.parameters || []),
              refetch,
            }}
          />
        </Content>
      </AntLayout>
    </AntLayout>
  );
};
