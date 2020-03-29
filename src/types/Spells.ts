/* eslint-disable @typescript-eslint/camelcase */

interface SpellValue {
  casting_likelihood: number;
}

export interface Spell {
  key: number;
  value: SpellValue;
}

export const createSpell = function() {
  return {
    key: 0,
    value: {
      casting_likelihood: 1.0
    }
  };
};
