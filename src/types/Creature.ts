/* eslint-disable @typescript-eslint/camelcase */

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

export interface Attributes {
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
