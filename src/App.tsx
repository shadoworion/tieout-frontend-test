import { lazy, useState } from "react";
import TypesafeI18n from "./i18n/i18n-react";
import { Routes, Route, useLocation } from "react-router";
import { loadLocaleAsync } from "./i18n/i18n-util.async";
import { useOrganization, usePermissions } from "./utils/globals";
import { Loading } from "./components/templates/Loading";
import { Auth } from "./pages/Auth";
import { AnimatePresence } from "motion/react";
import {
  User_SyncDocument,
  User_SyncMutation,
  User_SyncMutationVariables,
} from "./generated/graphql";
import { ConfigProvider, App as AntApp } from "antd";
import Ant_heIL from "antd/locale/he_IL";
import dayjs from "dayjs";
import Dayjs_heIL from "dayjs/locale/he";
import { SuspenseElement } from "./utils/hooks/react-router/SuspenseElement";
import { Layout as AdminLayout } from "./pages/Admin/Layout";
import { ClerkAppearance, theme } from "./styles/theme";
import { Headers } from "./components/templates/Headers";
import { useAsyncEffect, useUpdateEffect } from "ahooks";
import { SignIn } from "./pages/Auth/SignIn";
import { ClerkProvider } from "@clerk/react-router";
import { RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { he as Clerk_heIL } from "./utils/clerk/localizations";
import { graphRequest } from "./utils/hooks/graphql/request";
import { WithPermission } from "./utils/hooks/react-router/WithPermission";
import { SignedInRoute } from "./utils/hooks/react-router/SignedInRoute";
import posthog from "posthog-js";

const Pages = {
  Admin: {
    SourceTrx: lazy(() => import("./pages/Admin/SourceTrx")),
  },
};

export const AppWrapper = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useAsyncEffect(async () => {
    dayjs.locale(Dayjs_heIL);
    await loadLocaleAsync("he").then(() => setIsLoading(false));
  }, []);

  return (
    <ConfigProvider locale={Ant_heIL} direction="rtl" theme={theme}>
      <AntApp rootClassName="w-full h-full">
        <Headers locale="he" />
        <AnimatePresence mode="wait">
          <ClerkProvider
            publishableKey={
              "pk_test_ZGVjZW50LW1vbGUtNy5jbGVyay5hY2NvdW50cy5kZXYk"
            }
            localization={Clerk_heIL}
            appearance={ClerkAppearance}
          >
            {isLoading && <Loading />}
            {!isLoading && (
              <TypesafeI18n locale="he">
                <App />
              </TypesafeI18n>
            )}
          </ClerkProvider>
        </AnimatePresence>
      </AntApp>
    </ConfigProvider>
  );
};

const App = () => {
  const location = useLocation();
  const { user, isSignedIn } = useUser();
  const { getPermissions, permissions, resetPermissions } = usePermissions();
  const { organizationId, setOrganization } = useOrganization();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useAsyncEffect(async () => {
    setIsLoading(true);
    if (isSignedIn) {
      await graphRequest<User_SyncMutation, User_SyncMutationVariables>(
        User_SyncDocument
      ).then(async ({ user_sync }) => {
        posthog.identify(user_sync.userId, {
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          clerkId: user.id,
        });
        if (!organizationId) {
          await setOrganization(user_sync.organizationId);
        }
        await getPermissions();
      });
    }
    if (isSignedIn === false) {
      await setOrganization(null).then(() => {
        resetPermissions();
      });
    }
  }, [isSignedIn]);

  useUpdateEffect(() => {
    if (isSignedIn && Object.keys(permissions).length > 0) {
      setIsLoading(false);
    }
    if (isSignedIn === false) {
      setIsLoading(false);
    }
  }, [isSignedIn, permissions]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <Routes key={location.key} location={location}>
          <Route element={<Auth />}>
            <Route path="/SignIn/*" element={<SignIn />} />
          </Route>
          <Route element={<SignedInRoute />}>
            <Route
              element={
                <WithPermission permission="d95762ef-5670-4b84-9bc3-5515b841ce8a" />
              }
            >
              <Route path="/" element={<AdminLayout />}>
                <Route index element={SuspenseElement(Pages.Admin.SourceTrx)} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<RedirectToSignIn />} />
        </Routes>
      )}
    </>
  );
};
