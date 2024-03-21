import { combineReducers, configureStore } from '@reduxjs/toolkit';

import homeReducer from './home';
import studioReducer from './studio';
import cardTrayReducer from './studio/cardTray';
import explorerReducer from './studio/explorer';
import propertiesReducer from './studio/propertiesPanel';

const rootReducer = combineReducers({
  home: homeReducer,
  studio: studioReducer,
  cardTray: cardTrayReducer,
  explorer: explorerReducer,
  properties: propertiesReducer,
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
