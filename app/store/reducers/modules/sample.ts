import assign from 'lodash/assign';

import { ActionTypes } from '@app/store/actions/sample';

interface IState {
  text: string;
}

const defaultState: IState = {
  text: ''
};

export default function(state: IState = defaultState, { type, payload }) {
  switch (type) {
    case ActionTypes.SAMPLE_SET_TEXT:
      const { text } = payload;
      return assign({}, state, { text });

    default:
      return state;
  }
}
