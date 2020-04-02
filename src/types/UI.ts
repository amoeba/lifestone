export enum TAB {
  PROPERTIES = "PROPERTIES",
  CREATURE = "CREATURE",
  SKILLS = "SKILLS",
  BODYPARTS = "BODYPARTS",
  BOOK = "BOOK",
  SPELLS = "SPELLS",
  CREATELIST = "CREATELIST",
  GENERATORS = "GENERATORS",
  EMOTES = "EMOTES",
  JSON = "JSON"
}

export enum THEME {
  LIGHT = "light",
  DARK = "dark"
}

export interface UIState {
  activeTab: string;
  darkMode: boolean | null;
}
