export const createGenerator = function() {
  return {
    slot: 0,
    probabiity: 0,
    delay: 0,
    wcid: 0,
    regen: 0,
    location: 0,
    initial: 0,
    max: 0,
    palette: 0,
    shade: 0,
    stack: 0,
    cell: 0,
    frame: 0
  };
};

export interface Generator {
  slot: number;
  probabiity: number;
  delay: number;
  wcid: number;
  regen: number;
  location: number;
  initial: number;
  max: number;
  palette: number;
  shade: number;
  stack: number;
  cell: number;
  frame: number;
}
