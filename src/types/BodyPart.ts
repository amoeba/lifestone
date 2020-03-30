/* eslint-disable @typescript-eslint/camelcase */

export enum BodyPartType {
  Undefined,
  Head,
  Chest,
  Abdomen,
  UpperArm,
  LowerArm,
  Hand,
  UpperLeg,
  LowerLeg,
  Foot,
  Horn,
  FrontLeg,
  FrontFoot,
  RearLeg,
  RearFoot,
  Torso,
  Tail,
  Arm,
  Leg,
  Claw,
  Wings,
  Breath,
  Tentacle,
  UpperTentacle,
  LowerTentacle,
  Cloak
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

export interface BodyPartTable {
  body_part_table: BodyPart[];
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

export enum DamageType {
  Undefined,
  Slashing,
  Piercing,
  Bludgeon,
  Cold,
  Fire,
  Acid,
  Electric,
  Health,
  Stamima,
  Mana,
  Nether,
  Prismatic
}

export const createBodyPart = function() {
  return {
    type: 0,
    value: {
      dtype: 0,
      dval: 0,
      dvar: 0.0,
      bh: 0,
      acache: {
        base_armor: 0,
        armor_vs_bludgeon: 0,
        armor_vs_pierce: 0,
        armor_vs_slash: 0,
        armor_vs_acid: 0,
        armor_vs_cold: 0,
        armor_vs_fire: 0,
        armor_vs_electric: 0,
        armor_vs_nether: 0
      },
      bpsd: {
        HLF: 0.0,
        MLF: 0.0,
        LLF: 0.0,
        HRF: 0.0,
        MRF: 0.0,
        LRF: 0.0,
        HLB: 0.0,
        MLB: 0.0,
        LLB: 0.0,
        HRB: 0.0,
        MRB: 0.0,
        LRB: 0.0
      }
    }
  };
};
