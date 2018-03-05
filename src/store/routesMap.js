import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';

const components = {
  HOME: 'Home',
  REPO_DETAIL: 'RepoDetail'
};

const routesMap = {
  HOME: '/',
  REPO_DETAIL: '/repo/:name'
};

const history = createHistory();

const routesConnect = connectRoutes(history, routesMap);
const routes = (state = 'Home', action = {}) => components[action.type] || state;

export { routesConnect, routes, history };
