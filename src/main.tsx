import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ReactRouter7Adapter } from "./utils/hooks/react-router/QueryParamsAdapter";
import { QueryParamProvider } from "use-query-params";
import "./styles/main.css";
import "virtual:uno.css";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
import { AppWrapper } from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
    mutations: {
      onError: console.error,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter7Adapter}>
        <AppWrapper />
      </QueryParamProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
