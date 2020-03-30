/* eslint-disable @typescript-eslint/camelcase */

export enum Training {
  Unusable,
  Untrained,
  Trained,
  Specialized
}

export enum Skills {
  ALCHEMY = "Alchemy",
  ARCANE_LORE = "Arcane Lore",
  ARMOR_TINKERING = "Armor Tinkering",
  ASSESS_CREATURE = "Assess Creature",
  ASSESS_PERSON = "Assess Person",
  Cooking = "Cooking",
  CREATURE_ENCHANTMENT = "Creature Enchantment",
  DECEPTION = "Deception",
  DIRTY_FIGHTING = "Dirty Fighting",
  DUAL_WIELD = "Dual Wield",
  FLETCHING = "Fletching",
  FINESSE_WEAPONS = "Finesse Weapons",
  HEALING = "Healing",
  HEAVY_WEAPONS = "Heavy Weapons",
  ITEM_ENCHANTMENT = "Item Enchantment",
  ITEM_TINKERING = "Item Tinkering",
  JUMP = "Jump",
  LEADERSHIP = "Leadership",
  LIFE_MAGIC = "Life Magic",
  LIGHT_WEAPONS = "Light Weapons",
  LOCKPICK = "Lockpick",
  LOYALTY = "Loyalty",
  MAGIC_DEFENSE = "Magic Defense",
  MAGIC_ITEM_TINKERING = "Magic Item Tinkering",
  MANA_CONVERSION = "Mana Conversion",
  MELEE_DEFENSE = "Melee Defense",
  MISSILE_DEFENSE = "Missile Defense",
  MISSILE_WEAPONS = "Missile Weapons",
  RECKLESSNESS = "Recklessness",
  RUN = "Run",
  SALVAGING = "Salvaging",
  SHIELD = "Shield",
  SNEAK_ATTACK = "Sneak Attack",
  TWO_HANDED_COMBAT = "Two Handed Combat",
  SUMMONING = "Summoning",
  VOID_MAGIC = "Void Magic",
  WAR_MAGIG = "War Magic",
  WEAPON_TINKERING = "Weapon Tinkering"
}

interface SkillValue {
  level_from_pp: number;
  last_used_time: number;
  init_level: number;
  pp: number;
  resistance_of_last_check: number;
  sac: number;
}

export interface Skill {
  id: number;
  value: SkillValue;
}

export const createSkill = function(): Skill {
  return {
    id: 0,
    value: {
      level_from_pp: 0,
      last_used_time: 0.0,
      init_level: 100,
      pp: 0,
      resistance_of_last_check: 0,
      sac: 3
    }
  };
};
