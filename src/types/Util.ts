export const processEnum = function(e: any) {
  return Object.keys(e)
    .filter(k => typeof e[k as any] !== "number")
    .map(k => ({
      id: k,
      label: e[k]
    }));
};

//
