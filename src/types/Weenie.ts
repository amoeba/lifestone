import { Attributes } from "./Creature";
import { Spell } from "./Spells";
import { CreateListItem } from "./CreateList";
import { Generator } from "./Generators";
import { Book } from "./Book";
import { BodyPartTable } from "./BodyPart";
import { Skill } from "./Skills";
import { EmoteSet } from "./Emotes";
import { OptionProperties, processEnum } from "./Util";
import { StringProp } from "./properties/StringProp";
import { Int32Prop } from "./properties/Int32Prop";
import { Int64Prop } from "./properties/Int64Prop";
import { FloatProp } from "./properties/FloatProp";
import { InstanceIDProp } from "./properties/InstanceIDProp";
import { DataIDProp } from "./properties/DataIDProp";
import { BoolProp } from "./properties/BoolProp";
import { PositionProp } from "./properties/PositionProp";

export enum WeenieType {
  CREATURE = "CREATURE",
  VENDOR = "VENDOR",
  BOOK = "BOOK"
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
  body: BodyPartTable;
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
  emoteTable: EmoteSet[];
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

export const getPropertyTypes = function(
  kind: WEENIE_PROPERTY
): OptionProperties[] {
  if (kind === WEENIE_PROPERTY.STRING) {
    return processEnum(StringProp);
  } else if (kind === WEENIE_PROPERTY.INT32) {
    return processEnum(Int32Prop);
  } else if (kind === WEENIE_PROPERTY.INT64) {
    return processEnum(Int64Prop);
  } else if (kind === WEENIE_PROPERTY.FLOAT) {
    return processEnum(FloatProp);
  } else if (kind === WEENIE_PROPERTY.DATAID) {
    return processEnum(DataIDProp);
  } else if (kind === WEENIE_PROPERTY.INSTANCEID) {
    return processEnum(InstanceIDProp);
  } else if (kind === WEENIE_PROPERTY.BOOL) {
    return processEnum(BoolProp);
  } else if (kind === WEENIE_PROPERTY.POSITION) {
    return processEnum(PositionProp);
  } else {
    return [];
  }
};
