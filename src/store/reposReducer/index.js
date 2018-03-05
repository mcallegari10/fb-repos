import { List } from 'immutable';

import { createReducer } from '~utils/store';

import * as actions from './actionTypes';

const initialState = List([]);

const reposReducer = {
  [actions.SET_REPOS]: (state, { payload }) => state.merge(payload)
};

export default (state = initialState, action) => createReducer(reposReducer, state, action);
