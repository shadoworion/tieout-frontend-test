import { GridApi } from "ag-grid-community";

export const setFilterDoubleClick = (
  api: GridApi,
  column: string,
  value: any
) =>
  api
    .setColumnFilterModel(column, {
      values: [value],
      type: "equals",
      filter: value,
    })
    .then(() => api.onFilterChanged());
