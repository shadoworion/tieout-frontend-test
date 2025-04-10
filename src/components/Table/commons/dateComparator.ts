import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const dateComparator = (
  filterDate: any,
  cellValue: any,
  format?: string
) => {
  if (!cellValue) return 0;

  const fcellValue = format ? dayjs(cellValue, format, true) : dayjs(cellValue);
  if (fcellValue.isBefore(dayjs(filterDate), "date")) {
    return -1;
  }
  if (fcellValue.isAfter(dayjs(filterDate), "date")) {
    return 1;
  }
  return 0;
};
