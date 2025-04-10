import React, { useContext } from "react";
import { I18nContext } from "../../../i18n/i18n-react";
import { ValueFormatterParams } from "ag-grid-community";
import { formatNumber } from "../../../utils/shared";

type AggRows = {
  label: string;
  value: string;
};

type Props = ValueFormatterParams & { aggRows?: AggRows[] };

export const AgGroupRow = (props: Props) => {
  const { LL } = useContext(I18nContext);
  const node = props.node;
  const count = node.allChildrenCount;
  const aggData = node.aggData;

  return (
    <table>
      <tbody>
        <tr>
          <td className="min-w-150">
            <div className="flex flex-row justify-start items-center children:mx-1">
              <span className="groupTitle">
                {node.key || LL.AgGrid.default.empty()}
              </span>
              <span>({count})</span>
            </div>
          </td>
          {props.aggRows &&
            aggData &&
            props.aggRows.map((row, i) => (
              <td key={i}>
                {row.label}: {formatNumber(aggData[row.value])}
              </td>
            ))}
        </tr>
      </tbody>
    </table>
  );
};
