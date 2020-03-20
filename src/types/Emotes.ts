const TYPES = {
  USE: "USE",
  QUEST_SUCEESS: "QUEST_SUCEESS",
  QUEST_FAILURE: "QUEST_FAILURE"
};

const PROPERTY = {
  PROBABILITY: "PROBABILITY"
};

export const EmoteTypes = [
  {
    id: 0,
    label: TYPES.USE
  },
  {
    id: 1,
    label: TYPES.QUEST_SUCEESS
  },
  {
    id: 2,
    label: TYPES.QUEST_FAILURE
  }
];

export function createEmote() {
  return {
    type: 0,
    properties: [
      {
        key: PROPERTY.PROBABILITY,
        value: 1.0
      }
    ],
    actions: []
  };
}
