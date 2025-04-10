import { Select as AntSelect, SelectProps, Skeleton } from "antd";
import { RefCallBack } from "react-hook-form";

export type CustomSelectProps = SelectProps & {
  inputRef?: RefCallBack;
  onChange?: (...event: any[]) => void;
  error?: boolean;
};

export const Select = ({
  inputRef,
  mode,
  size = "large",
  value,
  placeholder,
  labelInValue = false,
  options,
  optionRender,
  tagRender,
  labelRender,
  defaultActiveFirstOption = false,
  disabled = false,
  allowClear = false,
  showSearch = false,
  loading = false,
  onClick,
  onChange,
  onBlur,
  popupMatchSelectWidth = true,
  autoClearSearchValue = true,
  error = false,
  className,
  popupClassName,
}: CustomSelectProps) => {
  return (value || value?.length > 0) &&
    (!options || (options.length === 0 && loading)) ? (
    <Skeleton.Input
      className="w-full!"
      size={size === "middle" ? "default" : size}
      active
    />
  ) : (
    <AntSelect
      ref={inputRef}
      size={size}
      mode={mode}
      value={value}
      labelInValue={labelInValue}
      placeholder={placeholder}
      options={options}
      optionRender={optionRender}
      tagRender={tagRender}
      labelRender={labelRender}
      onClick={onClick}
      onChange={onChange}
      onBlur={onBlur}
      defaultActiveFirstOption={defaultActiveFirstOption}
      disabled={disabled}
      allowClear={allowClear}
      onClear={() => onChange(undefined)}
      showSearch={showSearch}
      loading={loading}
      status={error ? "error" : undefined}
      className={className}
      filterOption={(input, option) =>
        String(option?.label || option?.value)
          .toLowerCase()
          .includes(String(input).toLowerCase())
      }
      popupMatchSelectWidth={popupMatchSelectWidth}
      maxTagCount="responsive"
      optionLabelProp="label"
      popupClassName={popupClassName}
      autoClearSearchValue={autoClearSearchValue}
    />
  );
};
