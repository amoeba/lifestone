import { Action } from "./Actions";

export enum EMOTE {
  USE = "USE",
  QUEST_SUCEESS = "QUEST_SUCCESS",
  QUEST_FAILURE = "QUEST_FAILURE"
}

enum EMOTE_PROPERTY {
  PROBABILITY = "PROBABILITY"
}

interface Emote {
  type: string;
  properties: EmoteProperty[];
  actions: Action[];
}

interface EmoteProperty {
  key: string;
  value: any;
}

const emoteProperties = {
  [EMOTE.USE]: [
    {
      key: EMOTE_PROPERTY.PROBABILITY,
      value: 1.0
    }
  ]
};

export function getEmoteProperties(emote: string): EmoteProperty[] {
  return emoteProperties[emote];
}

export function createEmote(emote: string): Emote {
  return {
    type: emote,
    properties: getEmoteProperties(emote),
    actions: []
  };
}
