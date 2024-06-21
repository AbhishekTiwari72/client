import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './loginSlice'; // Adjust the import path based on your project structure

const rootReducer = combineReducers({
  login: loginReducer,
  // Add other slice reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
