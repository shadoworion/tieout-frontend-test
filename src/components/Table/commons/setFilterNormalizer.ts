export const setFilter = (values: any[], customNull?: any) => {
  if (customNull === false) return values;
  if (!customNull) return [...values, null];
  return [...values, customNull];
};
