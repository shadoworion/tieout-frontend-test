import { TranslationFunctions } from "../../../i18n/i18n-types";

export const valueFormatter = (
  LL: TranslationFunctions,
  value: any,
  type?: string
) => {
  if (!type) return value ? value : LL.AgGrid.default.empty();
  return value ? LL[type][value]() : LL.AgGrid.default.empty();
};
