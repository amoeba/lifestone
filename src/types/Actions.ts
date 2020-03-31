export enum ACTION {
  SAY,
  BROADCAST
}

export enum ACTIONPROPERTY {
  DELAY,
  EXTENT,
  MESSAGE
}

interface ActionProperty {
  id: number;
  value: any;
}

export interface Action {
  type: number;
  properties: ActionProperty[];
}

const actionProperties: { [id: number]: ActionProperty[] } = {
  [ACTION.SAY]: [
    {
      id: ACTIONPROPERTY.DELAY,
      value: 0
    },
    {
      id: ACTIONPROPERTY.EXTENT,
      value: 1
    },
    {
      id: ACTIONPROPERTY.MESSAGE,
      value: "Argggh...."
    }
  ],
  [ACTION.BROADCAST]: [
    {
      id: ACTIONPROPERTY.MESSAGE,
      value: "Hello!"
    }
  ]
};

export function getActionProperties(type: number): ActionProperty[] {
  return actionProperties[type];
}

export function createAction(type: ACTION): Action {
  return {
    type: type,
    properties: getActionProperties(type)
  };
}
