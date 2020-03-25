export const createCreateListItem = function() {
  return {
    weenie: 0,
    destination: 0,
    palette: 0,
    shade: 0,
    quantity: 0,
    bonded: false
  };
};

export interface CreateListItem {
  weenie: number;
  destination: number;
  palette: number;
  shade: number;
  quantity: number;
  bonded: boolean;
}
