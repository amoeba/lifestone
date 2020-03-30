/* eslint-disable @typescript-eslint/camelcase */

interface SpellValue {
  casting_likelihood: number;
}

export interface Spell {
  id: number;
  value: SpellValue;
}

export const createSpell = function() {
  return {
    id: 0,
    value: {
      casting_likelihood: 1.0
    }
  };
};
