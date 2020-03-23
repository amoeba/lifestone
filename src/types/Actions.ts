export enum ACTION {
  TURN_TO_TARGET = "TURN_TO_TARGET",
  WAVE = "WAVE",
  INQ_QUEST = "INQ_QUEST"
}

enum PROPERTY {
  DELAY = "DELAY",
  QUEST = "QUEST"
}

export interface Action {
  type: string;
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

interface ActionProperty {
  key: string;
  value: number;
}

const actionProperties: { [key: string]: ActionProperty[] } = {
  [ACTION.TURN_TO_TARGET]: [
    {
      key: PROPERTY.DELAY,
      value: 1.0
    }
  ],
  [ACTION.WAVE]: [
    {
      key: PROPERTY.DELAY,
      value: 2.0
    }
  ],
  [ACTION.INQ_QUEST]: [
    {
      key: PROPERTY.QUEST,
      value: 0
    }
  ]
};

export function getActionProperties(actionId: string): ActionProperty[] {
  return actionProperties[actionId];
}

export function createAction(action: string): Action {
  return {
    type: action,
    properties: getActionProperties(action)
  };
}
