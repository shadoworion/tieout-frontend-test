import React from "react";
import { DatePicker as AntDatepicker, DatePickerProps, Skeleton } from "antd";
import { RefCallBack } from "react-hook-form";
import dayjs from "dayjs";

export type CustomDatepickerProps = DatePickerProps & {
  inputRef?: RefCallBack;
  onChange?: (...event: any[]) => void;
  showTime?: boolean;
  error?: boolean;
  loading?: boolean;
  popupClassName?: string | undefined;
  panelExtra?: React.ReactNode;
};

export const Datepicker = ({
  inputRef,
  size = "large",
  locale,
  format = "DD/MM/YYYY",
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  picker = "date",
  showTime = false,
  disabledDate,
  error,
  loading = false,
  disabled = false,
  className,
  popupClassName,
  allowClear = false,
}: CustomDatepickerProps) => {
  return loading ? (
    <Skeleton.Input size={size === "middle" ? "default" : size} active />
  ) : (
    <AntDatepicker
      ref={inputRef}
      locale={locale}
      size={size}
      format={format}
      placeholder={placeholder}
      picker={picker}
      showTime={showTime}
      value={!!value ? (dayjs.isDayjs(value) ? value : dayjs(value)) : null}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      disabledDate={disabledDate}
      disabled={disabled}
      status={error ? "error" : undefined}
      className={className}
      popupClassName={popupClassName}
      allowClear={allowClear}
    />
  );
};
