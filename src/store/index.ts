import { combineReducers, configureStore } from '@reduxjs/toolkit';

import homeReducer from './home';
import userReducer from './user';

const rootReducer = combineReducers({
  home: homeReducer,
  user: userReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
