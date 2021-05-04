import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import exampleReducer from './store/example/example.reducer';

const rootReducer = combineReducers({
  form: formReducer,
  example: exampleReducer
});

export default rootReducer;
