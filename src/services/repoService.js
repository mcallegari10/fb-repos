import api from './api';

export const getFacebookRepos = () => api.get('/users/facebook/repos');

export const getRepo = repo => api.get(`/repos/facebook/${repo}`);

export const getContributors = repo => api.get(`/repos/facebook/${repo}/contributors`);
