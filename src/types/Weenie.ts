import { CreatureProperties } from "./Creature";
import { Spell } from "./Spells";
import { CreateListItem } from "./CreateList";
import { Generator } from "./Generators";
import { Book } from "./Book";
import { BodyPart } from "./Creature";
import { Int32Prop } from "./properties/Int32Prop";

export enum WeenieType {
  CREATURE = "CREATURE",
  VENDOR = "VENDOR",
  BOOK = "BOOK"
}

enum StringProp {
  Name,
  Sex
}

enum Int64Prop {
  TOTAL_EXPERIENCE = "TOTAL_EXPERIENCE",
  AVAILABLE_EXPERIENCE = "AVAILABLE_EXPERIENCE"
}

enum FloatProp {
  HEARTBEAT_INTERVAL = "HEARTBEAT_INTERVAL",
  HEARTBEAT_TIMESTAMP = "HEARTBEAT_TIMESTAMP"
}

enum DataIDProp {
  SETUP = "SETUP",
  MOTION_TABLE = "MOTION_TABLE"
}

enum InstanceIDProp {
  OWNER = "OWNER",
  CONTAINER = "CONTAINER"
}

enum BoolProp {
  ATTACKABLE = "ATTACKABLE",
  ETHEREAL = "ETHEREAL"
}

enum PositionProp {
  LOCATION = "LOCATION",
  DESTINATION = "DESTINATION"
}

interface WeenieProperty<K, V> {
  key: K;
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
  attributes: CreatureProperties;
  body: BodyPart[];
  StringStats: StringProp[];
  Int32Stats: Int32Prop[];
  Int64Stats: Int64Prop[];
  FloatStats: FloatProp[];
  DataIDStats: DataIDProp[];
  InstanceIDStats: InstanceIDProp[];
  BoolStats: BoolProp[];
  PositionStats: PositionProp[];
  book: Book | null;
  spells: Spell[];
  createList: CreateListItem[];
  generators: Generator[];
  emoteTable: [];
}

export const createProperty = function(kind: WEENIE_PROPERTY) {
  let retval = {};

  if (kind === WEENIE_PROPERTY.STRING) {
    retval = { key: StringProp.NAME, value: "" };
  } else if (kind === WEENIE_PROPERTY.INT32) {
    retval = { key: Int32Prop.AccountRequirements, value: 1 };
  } else if (kind === WEENIE_PROPERTY.INT64) {
    retval = { key: Int64Prop.AVAILABLE_EXPERIENCE, value: 1 };
  } else if (kind === WEENIE_PROPERTY.FLOAT) {
    retval = { key: FloatProp.HEARTBEAT_INTERVAL, value: 1 };
  } else if (kind === WEENIE_PROPERTY.DATAID) {
    retval = { key: DataIDProp.MOTION_TABLE, value: 1 };
  } else if (kind === WEENIE_PROPERTY.INSTANCEID) {
    retval = { key: InstanceIDProp.CONTAINER, value: 1 };
  } else if (kind === WEENIE_PROPERTY.BOOL) {
    retval = { key: BoolProp.ATTACKABLE, value: false };
  } else if (kind === WEENIE_PROPERTY.POSITION) {
    retval = { key: PositionProp.DESTINATION, value: 1 };
  }

  return retval;
};

interface SelectOption {
  label: string;
  value: number;
}

export const processEnum = function(input: Enumerator): SelectOption[] {
  return Object.keys(input)
    .filter(p => {
      return isNaN(p);
    })
    .map(p => {
      return {
        value: input[p],
        label: p
      };
    });
};

export const getPropertyTypes = function(kind: WEENIE_PROPERTY) {
  let retval: any[] = [];

  if (kind === WEENIE_PROPERTY.STRING) {
    retval = processEnum(StringProp);
  } else if (kind === WEENIE_PROPERTY.INT32) {
    retval = processEnum(Int32Prop);
  } else if (kind === WEENIE_PROPERTY.INT64) {
    retval = processEnum(Int64Prop);
  } else if (kind === WEENIE_PROPERTY.FLOAT) {
    retval = processEnum(FloatProp);
  } else if (kind === WEENIE_ PROPERTY.DATAID) {
    retval = processEnum(DataIDProp);
  } else if (kind === WEENIE_PROPERTY.INSTANCEID) {
    retval = processEnum(InstanceIDProp);
  } else if (kind === WEENIE_PROPERTY.BOOL) {
    retval = processEnum(BoolProp);
  } else if (kind === WEENIE_PROPERTY.POSITION) {
    retval = processEnum(PositionProp);
  }

  return retval;
};
