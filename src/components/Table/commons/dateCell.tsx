import { CSSProperties } from "react";
import { ValueFormatterParams } from "ag-grid-community";
import { AgCustomCell } from "./customCell";
import { useI18nContext } from "../../../i18n/i18n-react";
import { Typography } from "antd";
import cx from "classnames";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
dayjs.extend(customParseFormat);
dayjs.extend(utc);

const { Text } = Typography;

type Props = ValueFormatterParams & {
  dateformat?: string;
  className?: string;
  style?: CSSProperties;
  outputFormat?: string;
  isUTC?: boolean;
  timefix?: number;
};

export const AgDateCell = (props: Props) => {
  const { LL } = useI18nContext();
  const date = props.dateformat
    ? props.isUTC
      ? dayjs(props.value, props.dateformat, true).utc(true).local()
      : dayjs(props.value, props.dateformat, true)
    : props.isUTC
    ? dayjs(props.value).utc(true).local()
    : dayjs(props.value);

  const duration = dayjs.duration(Math.abs(props.timefix || 0), "hours");

  return (
    <AgCustomCell
      className={props.className || "leading-4 !justify-end"}
      style={{ direction: "ltr", ...(props.style || {}) }}
    >
      {props.value
        ? date.format(props.outputFormat || "DD/MM/YYYY HH:mm")
        : LL.AgGrid.default.empty()}{" "}
      <Text type="secondary" className={cx({ "ml-2": !!props.timefix })}>
        {!!props.timefix
          ? `(${duration.format("HH:mm")}${props.timefix > 0 ? "+" : "-"})`
          : ""}
      </Text>
    </AgCustomCell>
  );
};
