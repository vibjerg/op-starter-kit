/**
 * @file: Profile reducer
 */

function DotLokate(string, object) {
  const path = string.split('.');
  const current = object[path.shift()];

  if (path.length) {
    return DotLokate(path.join('.'), current);
  }

  return current;
}

const methods = {};

methods.drag = (state, data) => {
  return {dragging: data}
};

methods.drop = (state, data) => {
  const newstate = {dragging: null};
  if (state.dropzone) {
    newstate.pages = Object.assign({}, state.pages);
    DotLokate(state.dropzone, newstate.pages).push({component: state.dragging.key, children: []});
  }

  return newstate;
};

methods.dropzone = (state, {id, active}) => {
  let dropzones = Object.assign([], state.dropzones);
  if (active) {
    dropzones.push(id);
  }
  else {
    dropzones = dropzones.filter(d => d !== id);
  }
  return {dropzone: dropzones[dropzones.length -1], dropzones}
};

methods.addPage = (state, id) => {
  const pages = Object.assign({}, state.pages || {});
  pages[id] = [];

  return {pages};
};


methods.query = (state, query) => {

  const search = Object.assign({}, state.search);
  search.query = query;

  return {search};
};




export default function uiReducer (state = {pages:[], search:{}}, action = {}) {

  if (action.type !== 'ui') {
    return state;
  }

  const newState = methods[action.action](state, action.data);
  return Object.assign({}, state, newState);
}
