/* eslint-disable @typescript-eslint/camelcase */

interface Attribute {
  cp_spent: number;
  level_from_cp: number;
  init_level: number;
}

interface Vital {
  cp_spent: number;
  level_from_cp: number;
  init_level: number;
  current: number;
}

export interface Attributes {
  strength: Attribute;
  endurance: Attribute;
  coordination: Attribute;
  quickness: Attribute;
  focus: Attribute;
  self: Attribute;
  health: Vital;
  stamina: Vital;
  mana: Vital;
}

export const createAttributes = function() {
  return {
    strength: {
      cp_spent: 0,
      level_from_cp: 0,
      init_level: 100
    },
    endurance: {
      cp_spent: 0,
      level_from_cp: 0,
      init_level: 100
    },
    coordination: {
      cp_spent: 0,
      level_from_cp: 0,
      init_level: 100
    },
    quickness: {
      cp_spent: 0,
      level_from_cp: 0,
      init_level: 100
    },
    focus: {
      cp_spent: 0,
      level_from_cp: 0,
      init_level: 100
    },
    self: {
      cp_spent: 0,
      level_from_cp: 0,
      init_level: 100
    },
    health: {
      cp_spent: 0,
      level_from_cp: 0,
      init_level: 100,
      current: 50
    },
    stamina: {
      cp_spent: 0,
      level_from_cp: 0,
      init_level: 100,
      current: 100
    },
    mana: {
      cp_spent: 0,
      level_from_cp: 0,
      init_level: 100,
      current: 100
    }
  };
};
