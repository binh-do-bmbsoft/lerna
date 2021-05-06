import { LOADING_ACTION_TYPES } from './action';

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING_ACTION_TYPES.EXAMPLE_ACTION_TYPES:
      return {
        ...state,
        isLoading: payload.isLoading
      };
    default:
      return state;
  }
};
