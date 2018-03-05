import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';

const components = {
  HOME: 'Home'
};

const routesMap = {
  HOME: '/'
};

const history = createHistory();

const routesConnect = connectRoutes(history, routesMap);
const routes = (state = 'Home', action = {}) => components[action.type] || state;

export { routesConnect, routes, history };
