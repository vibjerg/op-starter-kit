/**
 * @file: Profile reducer
 */

const methods = {};

const defaultState = {
  search: {
    result: []
  }
}

methods.search = (state, {params, response}) => {
  const search = {result: response.data};
  return {search}
};

export default function requestReducer (state = defaultState, action = {}) {

  if (action.type !== 'request') {
    return state;
  }

  const newState = methods[action.action](state, action.data);
  return Object.assign({}, state, newState);
}
