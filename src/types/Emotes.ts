import { Action } from "./Actions";

export enum EMOTE {
  USE,
  QUEST_SUCCESS,
  QUEST_FAILURE,
  GIVE,
  FOUR,
  FIVE,
  DEATH
}

export enum EMOTE_PROPERTY {
  PROBABILITY,
  QUEST,
  CLASS_ID,
  GIVE,
  STYLE,
  SUBSTYLE
}

interface EmoteProperty {
  id: number;
  value: number;
}

interface EmoteValue {
  category: number;
  properties: EmoteProperty[];
  emotes: Action[];
}

interface Emote {
  category: EMOTE;
  properties: EmoteProperty[];
  emotes: Action[];
}

export interface EmoteSet {
  id: EMOTE;
  value: Emote[];
}

const emoteProperties: { [id: number]: EmoteProperty[] } = {
  [EMOTE.USE]: [
    {
      id: EMOTE_PROPERTY.PROBABILITY,
      value: 1.0
    }
  ],
  [EMOTE.QUEST_SUCCESS]: [
    {
      id: EMOTE_PROPERTY.PROBABILITY,
      value: 0.5
    },
    {
      id: EMOTE_PROPERTY.QUEST,
      value: 1
    }
  ],
  [EMOTE.QUEST_FAILURE]: [
    {
      id: EMOTE_PROPERTY.PROBABILITY,
      value: 1.0
    },
    {
      id: EMOTE_PROPERTY.QUEST,
      value: 2
    }
  ],
  [EMOTE.GIVE]: [
    {
      id: EMOTE_PROPERTY.PROBABILITY,
      value: 1.0
    },
    {
      id: EMOTE_PROPERTY.CLASS_ID,
      value: 2
    }
  ],
  [EMOTE.FOUR]: [
    {
      id: EMOTE_PROPERTY.PROBABILITY,
      value: 1.0
    },
    {
      id: EMOTE_PROPERTY.STYLE,
      value: 12345
    },
    {
      id: EMOTE_PROPERTY.SUBSTYLE,
      value: 54321
    }
  ],
  [EMOTE.FIVE]: [
    {
      id: EMOTE_PROPERTY.PROBABILITY,
      value: 1.0
    },
    {
      id: EMOTE_PROPERTY.CLASS_ID,
      value: 2
    }
  ],
  [EMOTE.DEATH]: [
    {
      id: EMOTE_PROPERTY.PROBABILITY,
      value: 1.0
    }
  ]
};

export function getEmoteProperties(emote: EMOTE): EmoteProperty[] {
  return emoteProperties[emote];
}

export function createEmote(id: EMOTE): Emote {
  return {
    category: id,
    properties: getEmoteProperties(id),
    emotes: []
  };
}

export function createEmoteSet(id: EMOTE): EmoteSet {
  return {
    id: id,
    value: [createEmote(id)]
  };
}
