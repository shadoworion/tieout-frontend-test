import { AdvancedFilterModel, FilterModel } from "ag-grid-community";

type FilterOptions = {
  [key: string]: {
    toLowerCase?: boolean;
  };
};

export const normalizeFilterModel = (
  filterModel: AdvancedFilterModel | FilterModel,
  options?: FilterOptions
) => {
  return Object.entries(filterModel).map(([key, value]) => ({
    colId: key,
    filterType: value.filterType,
    customFilterType: value.customFilterType,
    type: value.type,
    values: (value.values || []).map((value: any) => String(value)),
    filter: !!value.filter
      ? options?.[key]?.toLowerCase
        ? String(value.filter).toLowerCase()
        : String(value.filter)
      : undefined,
    filterTo: !!value.filterTo
      ? options?.[key]?.toLowerCase
        ? String(value.filterTo).toLowerCase()
        : String(value.filterTo)
      : undefined,
    dateFrom: value.dateFrom,
    dateTo: value.dateTo,
    operator: value.operator,
    conditions: (value.conditions || []).map((condition: any) => ({
      colId: key,
      filterType: condition.filterType,
      type: condition.type,
      filter: !!condition.filter
        ? options?.[key]?.toLowerCase
          ? String(condition.filter).toLowerCase()
          : String(condition.filter)
        : undefined,
      filterTo: !!condition.filterTo
        ? options?.[key]?.toLowerCase
          ? String(condition.filterTo).toLowerCase()
          : String(condition.filterTo)
        : undefined,
      dateFrom: condition.dateFrom,
      dateTo: condition.dateTo,
    })),
  }));
};
