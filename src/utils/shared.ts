type IFormatNumberOptions = {
  maximumFractionDigits?: number;
  showMinus?: boolean;
};

export const formatNumber = (value: any, opt?: IFormatNumberOptions) => {
  if (value === undefined || value === null) return null;
  const number = Number(value);
  const options = { maximumFractionDigits: opt?.maximumFractionDigits || 4 };
  if (number < 0.0001 && number > -0.0001 && number !== 0) {
    if (number < 0 && !(opt?.showMinus ?? false)) {
      return `(${Math.abs(number).toExponential(3)})`;
    }
    return number.toExponential(3);
  }
  if (number < 0 && !(opt?.showMinus ?? false)) {
    return `(${Math.abs(number).toLocaleString(undefined, options)})`;
  }
  return number.toLocaleString(undefined, options);
};

export const fileToBase64 = async (
  file: any,
  withPrefix?: boolean
): Promise<string> => {
  const base64: string = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = (error) => reject(error);
  });
  return withPrefix ? base64 : base64.split(";base64,").pop();
};

export const timer = (sec: number) =>
  new Promise((res) => setTimeout(res, sec * 1000));

export const URLDownloader = (url: string, filename: string) => {
  var win = document.defaultView || window;
  if (!win) {
    console.warn("There is no `window` associated with the current `document`");
    return;
  }
  var element = document.createElement("a");
  element.setAttribute("href", url);
  element.setAttribute("target", "_blank");
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.dispatchEvent(
    new MouseEvent("click", {
      bubbles: false,
      cancelable: true,
      view: win,
    })
  );
  document.body.removeChild(element);
};

type IParam = {
  key: string;
  value: string;
};

type IParamOptions = {
  boolAsString?: boolean;
};

export const paramsToObject = <T extends object>(
  params: IParam[],
  { boolAsString = false }: IParamOptions = { boolAsString: false }
): T => {
  const result: Partial<T> = {};
  params.forEach(({ key, value }) => {
    const isArray = params.filter((p) => p.key === key).length > 1;

    let fvalue: string | number | boolean = value;
    if (["true", "false"].includes(value)) {
      fvalue = boolAsString ? value : value === "true" ? true : false;
    } else if (/[a-zA-Z]/g.test(value)) {
      fvalue = String(value);
    } else if (!isNaN(Number(value))) {
      fvalue = Number(value);
    }

    if (isArray) {
      if (!result[key]) result[key] = [];
      result[key].push(fvalue);
    } else {
      result[key] = fvalue;
    }
  });

  return result as T;
};

export type ExtractGQL<T> = T[Exclude<keyof T, "__typename">];
export type ExtractGQLFlat<T> = ExtractGQL<T> extends Array<infer U>
  ? U
  : ExtractGQL<T>;
