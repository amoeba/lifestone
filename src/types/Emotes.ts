import { Action } from "./Actions";

export enum EMOTE {
  USE = "USE",
  QUEST_SUCCESS = "QUEST_SUCCESS",
  QUEST_FAILURE = "QUEST_FAILURE"
}

enum EMOTE_PROPERTY {
  PROBABILITY = "PROBABILITY",
  QUEST = "QUEST"
}

interface Emote {
  type: string;
  properties: EmoteProperty[];
  actions: Action[];
}

interface EmoteProperty {
  key: string;
  value: number;
}

const emoteProperties: { [key: string]: EmoteProperty[] } = {
  [EMOTE.USE]: [
    {
      key: EMOTE_PROPERTY.PROBABILITY,
      value: 1.0
    }
  ],
  [EMOTE.QUEST_SUCCESS]: [
    {
      key: EMOTE_PROPERTY.PROBABILITY,
      value: 0.5
    },
    {
      key: EMOTE_PROPERTY.QUEST,
      value: 1
    }
  ],
  [EMOTE.QUEST_FAILURE]: [
    {
      key: EMOTE_PROPERTY.PROBABILITY,
      value: 1.0
    },
    {
      key: EMOTE_PROPERTY.QUEST,
      value: 2
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
