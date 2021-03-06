export const LOADING_ACTION_TYPES = {
  SET_LOADING_STATE: 'LOADING/SET_LOADING_STATE'
};

export const createSetLoadingStateAction = isLoading => ({
  type: LOADING_ACTION_TYPES.SET_LOADING_STATE,
  payload: {
    isLoading: isLoading
  }
});
