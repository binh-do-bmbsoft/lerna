import { LOADING_ACTION_TYPES } from './action';

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case LOADING_ACTION_TYPES.SET_LOADING_STATE:
      return {
        ...state,
        isLoading: payload.isLoading
      };
    default:
      return state;
  }
};
