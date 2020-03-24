export enum ACTION {
  TURN_TO_TARGET = "TURN_TO_TARGET",
  WAVE = "WAVE",
  GIVE = "GIVE",
  TELL = "TELL",
  INQ_QUEST = "INQ_QUEST"
}

enum PROPERTY {
  DELAY = "DELAY",
  QUEST = "QUEST",
  WEENIE = "WEENIE",
  DESTINATION = "DESTINATION",
  PALETTE = "PALETTE",
  SHADE = "SHADE",
  QUANTITY = "QUANTITY",
  BONDED = "BONDED"
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
    id: ACTION.GIVE,
    label: ACTION.GIVE
  },
  {
    id: ACTION.TELL,
    label: ACTION.TELL
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
  ],
  [ACTION.GIVE]: [
    {
      key: PROPERTY.DELAY,
      value: 0
    },
    {
      key: PROPERTY.WEENIE,
      value: 0
    },
    {
      key: PROPERTY.DESTINATION,
      value: 0
    },
    {
      key: PROPERTY.PALETTE,
      value: 0
    },
    {
      key: PROPERTY.SHADE,
      value: 0
    },
    {
      key: PROPERTY.QUANTITY,
      value: 0
    },
    {
      key: PROPERTY.BONDED,
      value: 0
    }
  ],
  [ACTION.TELL]: [
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
