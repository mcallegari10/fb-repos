import api from './api';

export const getFacebookRepos = () => api.get('/users/facebook/repos');
