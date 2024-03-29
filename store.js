import {
   createStore,
   applyMiddleware
   } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducers/index';
import AsyncStorage from '@react-native-community/async-storage';
import {
  createReactNavigationReduxMiddleware
}from 'react-navigation-redux-helpers';

// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: [],
// })

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation'] // selectedMovie si quieres que no navegue a la cache
}


const persistedReducer = persistReducer(persistConfig, reducer)
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
)

const store = createStore(
  persistedReducer,
  applyMiddleware(navigationMiddleware)
  )

export { store };
