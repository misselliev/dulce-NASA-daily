import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import storeSynchronize from 'redux-localstore';
import rootReducer from './rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initState = {
  daily: {},
  error: {},
  favorites: { favorites: [] },
};

const store = createStore(rootReducer, initState, composeEnhancer(applyMiddleware(thunk)));

storeSynchronize(store);

export default store;
