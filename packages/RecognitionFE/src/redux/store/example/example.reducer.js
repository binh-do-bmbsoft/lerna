import { ACTION_TYPES } from './example.action';

const initialState = {
  text: ''
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.EXAMPLE_ACTION_TYPES:
      return {
        ...state,
        text: payload
      };
    default:
      return state;
  }
};
