import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { routes, routesConnect } from './routesMap';
import repos from './reposReducer';

const middlewares = applyMiddleware(routesConnect.middleware);
const rootReducer = combineReducers({
  location: routesConnect.reducer,
  routes,
  repos
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
  compose(routesConnect.enhancer, middlewares)
);
