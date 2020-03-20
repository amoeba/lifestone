const ACTION = {
  TURN_TO_TARGET: "TURN_TO_TARGET",
  WAVE: "WAVE",
  INQ_QUEST: "INQ_QUEST"
}

const PROPERTY = {
  DELAY: "DELAY"
}

export const ActionTypes = [
  {
    id: 0,
    label: ACTION.TURN_TO_TARGET
  },
  {
    id: 1,
    label: ACTION.WAVE
  },
  {
    id: 2,
    label: ACTION.INQ_QUEST
  }
];

export function createAction() {
  return {
    type: 0,
    properties: [
      {
        key: PROPERTY.DELAY,
        value: 1
      }
    ]
  }
}
