import { CreatureProperties } from "./Creature";
import { Spell } from "./Spells";
import { CreateListItem } from "./CreateList";
import { Generator } from "./Generators";
import { Book } from "./Book";

export enum WeenieType {
  CREATURE = "CREATURE",
  VENDOR = "VENDOR",
  BOOK = "BOOK"
}

enum StringProp {
  NAME = "NAME",
  SEX = "SEX"
}

enum Int32Prop {
  ITEM_TYPE = "ITEM_TYPE",
  CREATURE_TYPE = "CREATURE_TYPE"
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
  id: number;
  name: string;
  type: WeenieType;
  properties: WeenieProperties;
  book: Book | null;
  creature: CreatureProperties;
  spells: Spell[];
  createList: CreateListItem[];
  generators: Generator[];
  emotes: [];
}

export const createProperty = function(
  kind: WEENIE_PROPERTY
): Record<any, any> {
  let retval = {};

  if (kind === WEENIE_PROPERTY.STRING) {
    retval = { key: StringProp.NAME, value: "" };
  } else if (kind === WEENIE_PROPERTY.INT32) {
    retval = { key: Int32Prop.CREATURE_TYPE, value: 1 };
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

export const getPropertyTypes = function(kind: WEENIE_PROPERTY): any[] {
  let retval: any[] = [];

  if (kind === WEENIE_PROPERTY.STRING) {
    retval = Object.keys(StringProp);
  } else if (kind === WEENIE_PROPERTY.INT32) {
    retval = Object.keys(Int32Prop);
  } else if (kind === WEENIE_PROPERTY.INT64) {
    retval = Object.keys(Int64Prop);
  } else if (kind === WEENIE_PROPERTY.FLOAT) {
    retval = Object.keys(FloatProp);
  } else if (kind === WEENIE_PROPERTY.DATAID) {
    retval = Object.keys(DataIDProp);
  } else if (kind === WEENIE_PROPERTY.INSTANCEID) {
    retval = Object.keys(InstanceIDProp);
  } else if (kind === WEENIE_PROPERTY.BOOL) {
    retval = Object.keys(BoolProp);
  } else if (kind === WEENIE_PROPERTY.POSITION) {
    retval = Object.keys(PositionProp);
  }

  return retval;
};
