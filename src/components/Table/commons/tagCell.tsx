import { ValueFormatterParams } from "ag-grid-community";
import { AgCustomCell } from "./customCell";

export const AgTagCell = (props: ValueFormatterParams) => {
  return (
    <AgCustomCell className="leading-4 !justify-start">
      {props.data.tag && (
        <div
          className="min-w-1.5 h-[20px] rounded-[2px] ml-2"
          style={{ background: props.data.tag }}
        />
      )}
      {props.value}
    </AgCustomCell>
  );
};
