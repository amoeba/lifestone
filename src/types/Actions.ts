enum ACTION {
  TURN_TO_TARGET = "TURN_TO_TARGET",
  WAVE = "WAVE",
  INQ_QUEST = "INQ_QUEST"
}

enum PROPERTY {
  DELAY = "DELAY"
}

interface ActionProperty {
  key: number;
  value: string;
}

export interface Action {
  type: number;
  properties: ActionProperty[];
}

export const ActionTypes = [
  {
    id: ACTION.TURN_TO_TARGET,
    label: ACTION.TURN_TO_TARGET
  },
  {
    id: ACTION.WAVE,
    label: ACTION.WAVE
  },
  {
    id: ACTION.INQ_QUEST,
    label: ACTION.INQ_QUEST
  }
];

const actionProperties = {
  [ACTION.TURN_TO_TARGET]: [
    {
      key: PROPERTY.DELAY,
      value: 1.0
    }
  ],
  [ACTION.WAVE]: [
    {
      key: PROPERTY.DELAY,
      value: 1.0
    }
  ],
  [ACTION.INQ_QUEST]: [
    {
      key: PROPERTY.DELAY,
      value: 1.0
    }
  ]
};

export function getActionProperties(actionId: string): ActionProperty[] {
  return actionProperties[actionId];
}

export function createAction() {
  return {
    type: ACTION.TURN_TO_TARGET,
    properties: getActionProperties(ACTION.TURN_TO_TARGET)
  };
}
