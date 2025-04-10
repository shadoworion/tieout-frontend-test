import { CustomCellEditorProps } from "ag-grid-react";
import { Datepicker } from "../../Controllers/Datepicker";
import dayjs from "dayjs";

export const CustomDateTimeCellEditor = ({
  value,
  onValueChange,
}: CustomCellEditorProps) => {
  return (
    <Datepicker
      className="w-full"
      placeholder="בחר תאריך"
      value={value}
      onChange={(e) => onValueChange(dayjs(e).toISOString())}
      format="DD/MM/YYYY"
    />
  );
};
