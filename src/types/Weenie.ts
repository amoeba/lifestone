import { Attributes } from "./Creature";
import { Spell } from "./Spells";
import { CreateListItem } from "./CreateList";
import { Generator } from "./Generators";
import { Book } from "./Book";
import { BodyPart } from "./Creature";
import { Int32Prop } from "./properties/Int32Prop";
import { Skill } from "./Skills";

export enum WeenieType {
  CREATURE = "CREATURE",
  VENDOR = "VENDOR",
  BOOK = "BOOK"
}

export enum StringProp {
  Name,
  Sex
}

enum Int64Prop {
  TotalExperience,
  AvailableExperience
}

enum FloatProp {
  HeartbeatInterval,
  HeartbeatTimestamp
}

enum DataIDProp {
  Setup,
  MotionTable
}

enum InstanceIDProp {
  Owner,
  Container
}

enum BoolProp {
  Attackable,
  Ethereal
}

enum PositionProp {
  Location,
  Destination
}

interface WeenieProperty<K, V> {
  id: K;
  value: V;
}

export enum WEENIE_PROPERTY {
  STRING = "String",
  INT32 = "Int32",
  INT64 = "Int64",
  FLOAT = "Float",
  DATAID = "DataID",
  INSTANCEID = "InstanceID",
  BOOL = "Bool",
  POSITION = "Position"
}

interface WeenieProperties {
  [WEENIE_PROPERTY.STRING]: WeenieProperty<StringProp, string>[];
  [WEENIE_PROPERTY.INT32]: WeenieProperty<Int32Prop, number>[];
  [WEENIE_PROPERTY.INT64]: WeenieProperty<Int64Prop, number>[];
  [WEENIE_PROPERTY.FLOAT]: WeenieProperty<FloatProp, number>[];
  [WEENIE_PROPERTY.DATAID]: WeenieProperty<DataIDProp, number>[];
  [WEENIE_PROPERTY.INSTANCEID]: WeenieProperty<InstanceIDProp, number>[];
  [WEENIE_PROPERTY.BOOL]: WeenieProperty<BoolProp, boolean>[];
  [WEENIE_PROPERTY.POSITION]: WeenieProperty<PositionProp, number>[];
}

export interface Weenie {
  wcid: number;
  weenieType: WeenieType;
  pageDataList: Book | null;
  attributes: Attributes | null;
  body: BodyPart[];
  boolStats: BoolProp[];
  intStats: Int32Prop[];
  didStats: DataIDProp[];
  iidStats: InstanceIDProp[];
  floatStats: FloatProp[];
  int64Stats: Int64Prop[];
  stringStats: StringProp[];
  posStats: PositionProp[];
  createList: CreateListItem[];
  skills: Skill[];
  emoteTable: [];
  spellbook: Spell[];
  generatorTable: Generator[];
}

export const createProperty = function(kind: WEENIE_PROPERTY) {
  let retval = {};

  if (kind === WEENIE_PROPERTY.STRING) {
    retval = { id: StringProp.Name, value: "" };
  } else if (kind === WEENIE_PROPERTY.INT32) {
    retval = { id: Int32Prop.AccountRequirements, value: 1 };
  } else if (kind === WEENIE_PROPERTY.INT64) {
    retval = { id: Int64Prop.AvailableExperience, value: 1 };
  } else if (kind === WEENIE_PROPERTY.FLOAT) {
    retval = { id: FloatProp.HeartbeatInterval, value: 1 };
  } else if (kind === WEENIE_PROPERTY.DATAID) {
    retval = { id: DataIDProp.MotionTable, value: 1 };
  } else if (kind === WEENIE_PROPERTY.INSTANCEID) {
    retval = { id: InstanceIDProp.Container, value: 1 };
  } else if (kind === WEENIE_PROPERTY.BOOL) {
    retval = { id: BoolProp.Attackable, value: false };
  } else if (kind === WEENIE_PROPERTY.POSITION) {
    retval = { id: PositionProp.Destination, value: 1 };
  }

  return retval;
};

export const getPropertyTypes = function(kind: WEENIE_PROPERTY): string[] {
  if (kind === WEENIE_PROPERTY.STRING) {
    return Object.keys(StringProp).filter(
      k => typeof StringProp[k as any] !== "number"
    );
  } else if (kind === WEENIE_PROPERTY.INT32) {
    return Object.keys(Int32Prop).filter(
      k => typeof Int32Prop[k as any] !== "number"
    );
  } else if (kind === WEENIE_PROPERTY.INT64) {
    return Object.keys(Int64Prop).filter(
      k => typeof Int64Prop[k as any] !== "number"
    );
  } else if (kind === WEENIE_PROPERTY.FLOAT) {
    return Object.keys(FloatProp).filter(
      k => typeof FloatProp[k as any] !== "number"
    );
  } else if (kind === WEENIE_PROPERTY.DATAID) {
    return Object.keys(DataIDProp).filter(
      k => typeof DataIDProp[k as any] !== "number"
    );
  } else if (kind === WEENIE_PROPERTY.INSTANCEID) {
    return Object.keys(InstanceIDProp).filter(
      k => typeof InstanceIDProp[k as any] !== "number"
    );
  } else if (kind === WEENIE_PROPERTY.BOOL) {
    return Object.keys(BoolProp).filter(
      k => typeof BoolProp[k as any] !== "number"
    );
  } else if (kind === WEENIE_PROPERTY.POSITION) {
    return Object.keys(PositionProp).filter(
      k => typeof PositionProp[k as any] !== "number"
    );
  } else {
    return [];
  }
};
