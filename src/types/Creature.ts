export interface CreatureProperties {
  strength: number;
  endurance: number;
  coordination: number;
  quickness: number;
  focus: number;
  self: number;
  health: {
    base: number;
    current: number;
    max: number;
  };
  stamina: {
    base: number;
    current: number;
    max: number;
  };
  mana: {
    base: number;
    current: number;
    max: number;
  };
}

export const createCreatureProperties = function() {
  return {
    strength: 0,
    endurance: 0,
    coordination: 0,
    quickness: 0,
    focus: 0,
    self: 0,
    health: {
      base: 0,
      current: 0,
      max: 0
    },
    stamina: {
      base: 0,
      current: 0,
      max: 0
    },
    mana: {
      base: 0,
      current: 0,
      max: 0
    }
  };
};
