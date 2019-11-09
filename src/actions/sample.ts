export enum ActionTypes {
  SAMPLE_SET_TEXT = "SAMPLE_SET_TEXT",
}

interface ISetTextAction {
  readonly type: ActionTypes.SAMPLE_SET_TEXT;
  readonly payload: {
    text: string,
  };
}

export const setText = (text: string): ISetTextAction => {
  return {
    payload: {
      text,
    },
    type: ActionTypes.SAMPLE_SET_TEXT,
  };
};

export const asyncAction = () => {
  return async (dispatch, getState) => {
    // Async action
  };
};
