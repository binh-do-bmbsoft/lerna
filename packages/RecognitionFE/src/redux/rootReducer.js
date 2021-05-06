import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import exampleReducer from './store/example/example.reducer';
import loadingReducer from './store/loading/reducer';
const rootReducer = combineReducers({
  form: formReducer,
  example: exampleReducer,
  loading: loadingReducer
});

export default rootReducer;
