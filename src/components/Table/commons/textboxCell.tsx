import { ValueFormatterParams } from "ag-grid-community";

export const AgTextboxCell = (props: ValueFormatterParams) => {
  if (!props.value) {
    return <span className="opacity-30 cursor-text">לחץ לשינוי...</span>;
  } else {
    return <span className="cursor-text">{props.value}</span>;
  }
};
