export interface Spell {
  id: number;
  name: string;
  probability: number;
}

export const createSpell = function() {
  return {
    id: 0,
    name: "",
    probability: 0
  };
};
