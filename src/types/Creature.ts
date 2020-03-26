interface Skill {
  name: string;
  spec: string;
  base: number;
  effective: number;
}

export interface CreatureProperties {
  attributes: {
    strength: number;
    endurance: number;
    coordination: number;
    quickness: number;
    focus: number;
    self: number;
  };
  vitals: {
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
  };
  skills: Skill[];
}

export const createCreatureProperties = function() {
  return {
    attributes: {
      strength: 0,
      endurance: 0,
      coordination: 0,
      quickness: 0,
      focus: 0,
      self: 0
    },
    vitals: {
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
    },
    skills: []
  };
};

export const createSkill = function() {
  return {
    name: "",
    spec: "",
    base: 100,
    effective: 100
  };
};
