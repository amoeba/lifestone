export interface OptionProperties {
  id: number;
  label: string;
}

export const processEnum = function(e: any): OptionProperties[] {
  return Object.keys(e)
    .filter(k => typeof e[k as any] !== "number")
    .map(k => ({
      id: Number(k),
      label: e[k]
    }));
};
