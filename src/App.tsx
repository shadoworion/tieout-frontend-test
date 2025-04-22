import { lazy, useState } from "react";
import TypesafeI18n from "./i18n/i18n-react";
import { Routes, Route, useLocation } from "react-router";
import { loadLocaleAsync } from "./i18n/i18n-util.async";
import { Loading } from "./components/templates/Loading";
import { AnimatePresence } from "motion/react";
import { ConfigProvider, App as AntApp } from "antd";
import Ant_heIL from "antd/locale/he_IL";
import dayjs from "dayjs";
import Dayjs_heIL from "dayjs/locale/he";
import { SuspenseElement } from "./utils/hooks/react-router/SuspenseElement";
import { theme } from "./styles/theme";
import { Headers } from "./components/templates/Headers";
import { useAsyncEffect } from "ahooks";

const Pages = {
  Admin: {
    SourceTrx: lazy(() => import("./pages")),
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
          {isLoading && <Loading />}
          {!isLoading && (
            <TypesafeI18n locale="he">
              <App />
            </TypesafeI18n>
          )}
        </AnimatePresence>
      </AntApp>
    </ConfigProvider>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <>
      <Routes key={location.key} location={location}>
        <Route path="/" element={SuspenseElement(Pages.Admin.SourceTrx)} />
      </Routes>
    </>
  );
};
