export enum BodyPartType {
  UNDEFINED = "UNDEFINED",

  HEAD = "HEAD",
  CHEST = "CHEST",
  ABDOMEN = "ABDOMEN",
  UPPER_ARM = "UPPER_ARM",
  LOWER_ARM = "LOWER_ARM",
  HAND = "HAND",
  UPPER_LEG = "UPPER_LEG",
  LOWER_LEG = "LOWER_LEG",
  FOOT = "FOOT",
  HORN = "HORN",
  FRONT_LEG = "FRONT_LEG",
  FRONT_FOOT = "FRONT_FOOT",
  REAR_LEG = "REAR_LEG",
  REAR_FOOT = "REAR_FOOT",
  TORSO = "TORSO",
  TAIL = "TAIL",
  ARM = "ARM",
  LEG = "LEG",
  CLAW = "CLAW",
  WINGS = "WINGS",
  BREATH = "BREATH",
  TENTACLE = "TENTACLE",
  UPPER_TENTACLE = "UPPER_TENTACLE",
  LOWER_TENTACLE = "LOWER_TENTACLE",
  CLOAK = "CLOAK"
}

interface BodyPartArmor {
  base: number;
  blunt: number;
  pierce: number;
  slash: number;
  acid: number;
  cold: number;
  fire: number;
  lightning: number;
  nether: number;
}

interface BPSD {
  highLeftFront: number;
  midLeftFront: number;
  lowLeftFront: number;
  highRightFront: number;
  midRightFront: number;
  lowRightFront: number;
  highLeftBack: number;
  midLeftBack: number;
  lowLeftBack: number;
  highRightBack: number;
  midRightBack: number;
  lowRightBack: number;
}

export interface BodyPart {
  type: number;
  damageType: number;
  damage: number;
  variance: number;
  height: number;
  armor: BodyPartArmor;
  bpsd: BPSD;
}

interface Skill {
  name: string;
  spec: string;
  base: number;
  effective: number;
}

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

export interface CreatureProperties {
  attributes: {
    strength: Attribute;
    endurance: Attribute;
    coordination: Attribute;
    quickness: Attribute;
    focus: Attribute;
    self: Attribute;
    health: Vital;
    stamina: Vital;
    mana: Vital;
  };
}

export const createCreatureBodyPart = function() {
  return {
    type: 0,
    damageType: 0,
    damage: 0,
    variance: 0,
    height: 0,
    armor: {
      base: 0,
      blunt: 0,
      pierce: 0,
      slash: 0,
      acid: 0,
      cold: 0,
      fire: 0,
      lightning: 0,
      nether: 0
    },
    highLeftFront: 0,
    midLeftFront: 0,
    lowLeftFront: 0,
    highRightFront: 0,
    midRightFront: 0,
    lowRightFront: 0,
    highLeftBack: 0,
    midLeftBack: 0,
    lowLeftBack: 0,
    highRightBack: 0,
    midRightBack: 0,
    lowRightBack: 0
  };
};

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
    skills: [],
    bodyParts: []
  };
};
