import { useCallback, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { IDoesFilterPassParams } from "ag-grid-community";
import { Datepicker } from "../../Controllers/Datepicker";
import { Select } from "../../Controllers/Select";
import { Divider, Space } from "antd";
import { Button } from "../../Base/Button";
import { CustomFilterProps, useGridFilter } from "ag-grid-react";

type IFilterModel = {
  filterType: "custom";
  customFilterType: "date" | "month" | "year" | "datetime";
  type: "equals" | "lessThanOrEqual" | "greaterThanOrEqual" | "inRange";
  dateFrom?: string;
  dateTo?: string | null;
};

export default ({
  model,
  onModelChange,
  getValue,
}: CustomFilterProps<any, any, IFilterModel>) => {
  const [filterType, setFilterType] =
    useState<IFilterModel["customFilterType"]>("date");
  const [type, setType] = useState<IFilterModel["type"]>("equals");
  const [dateFrom, setDateFrom] = useState<Dayjs | undefined>(undefined);
  const [dateTo, setDateTo] = useState<Dayjs | undefined>(undefined);

  const picker = useMemo(() => {
    switch (filterType) {
      case "datetime":
        return {
          picker: "date",
          showTime: true,
          format: "DD/MM/YYYY HH:mm",
        };
      case "month":
        return {
          picker: "month",
          showTime: false,
          format: "MM/YYYY",
        };
      case "year":
        return {
          picker: "year",
          showTime: false,
          format: "YYYY",
        };
      default:
        return {
          picker: "date",
          showTime: false,
          format: "DD/MM/YYYY",
        };
    }
  }, [filterType]);

  const doesFilterPass = useCallback(
    ({ node }: IDoesFilterPassParams) => {
      const fdateFrom =
        dateFrom ||
        (!!model.dateFrom ? dayjs(model.dateFrom, picker.format) : undefined);
      const fdateTo =
        dateTo ||
        (!!model.dateTo ? dayjs(model.dateTo, picker.format) : undefined);
      if (type === "inRange") {
        return (
          !!fdateFrom && fdateFrom.isValid() && !!fdateTo && fdateTo.isValid()
        );
      }
      return (
        getValue(node).contains(model) && !!fdateFrom && fdateFrom.isValid()
      );
    },
    [model]
  );

  const getModelAsString = useCallback(
    (model: IFilterModel) => {
      if (!model) return "";
      const fdateFrom =
        dateFrom ||
        (!!model.dateFrom ? dayjs(model.dateFrom, picker.format) : undefined);
      const fdateTo =
        dateTo ||
        (!!model.dateTo ? dayjs(model.dateTo, picker.format) : undefined);
      return !!fdateTo
        ? `${fdateFrom.format(picker.format)} - ${fdateTo.format(
            picker.format
          )}`
        : fdateFrom.format(picker.format);
    },
    [model]
  );

  useGridFilter({
    doesFilterPass,
    getModelAsString,
  });

  return (
    <>
      <div
        className="ag-input-wrapper custom-date-filter p-2"
        role="presentation"
      >
        <Space className="w-full" direction="vertical">
          <Select
            className="w-full"
            popupClassName="ag-custom-component-popup"
            size="middle"
            options={[
              { label: "Daily", value: "date" },
              { label: "Monthly", value: "month" },
              { label: "Yearly", value: "year" },
              { label: "Exact (with time)", value: "datetime" },
            ]}
            onChange={(value) => {
              setDateFrom(undefined);
              setDateTo(undefined);
              setFilterType(value);
            }}
            value={filterType}
          />
          <Select
            className="w-full"
            popupClassName="ag-custom-component-popup"
            size="middle"
            options={[
              { label: "Equals", value: "equals" },
              { label: "Less than or equal", value: "lessThanOrEqual" },
              { label: "Greater than or equal", value: "greaterThanOrEqual" },
              { label: "In range", value: "inRange" },
            ]}
            onChange={setType}
            value={type}
          />
          <Datepicker
            className="w-full"
            popupClassName="ag-custom-component-popup"
            size="middle"
            allowClear
            onChange={(value: Dayjs) => setDateFrom(value)}
            value={dateFrom || null}
            picker={
              picker.picker as
                | "date"
                | "month"
                | "year"
                | "time"
                | "week"
                | "quarter"
            }
            showTime={picker.showTime}
            format={picker.format}
          />
          {type === "inRange" && (
            <Datepicker
              className="w-full"
              popupClassName="ag-custom-component-popup"
              size="middle"
              allowClear
              onChange={(value: Dayjs) => setDateTo(value)}
              value={dateTo || null}
              picker={
                picker.picker as
                  | "date"
                  | "month"
                  | "year"
                  | "time"
                  | "week"
                  | "quarter"
              }
              showTime={picker.showTime}
              format={picker.format}
            />
          )}
        </Space>
      </div>
      <Divider className="m-0" />
      <Space className="w-full justify-end py-2 children:ml-2">
        <Button
          type="default"
          size="middle"
          label="אפס סינון"
          onClick={async () => {
            await new Promise((resolve) => {
              setDateFrom(undefined);
              setDateTo(undefined);
              setFilterType("date");
              setType("equals");
              resolve(true);
            }).then(() => onModelChange(null));
          }}
        />
        <Button
          type="default"
          size="middle"
          label="החל סינון"
          onClick={() =>
            onModelChange({
              filterType: "custom",
              customFilterType: filterType,
              type,
              dateFrom: dateFrom?.format(picker.format),
              dateTo: dateTo?.format(picker.format),
            })
          }
        />
      </Space>
    </>
  );
};
