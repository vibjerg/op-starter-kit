/**
 * @file: Entrypoint for all JS
 * Export a function which renders react component in store context.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import SocketClient from './State/Utils/Sockets';

import rootReducer from './State/Reducers/root.reducer';

/**
 * Service Provider middleware for redux, use this to call the service provider from a plain action.
 * Once the response is received, it will dispatch a new action with the event name + 'Response'.
 *
 * It expects a request of the following format:
 * {type: 'callServiceProvider', data: {*}, event: {String}}
 *
 * And returns the following:
 * {type: {String}, data: {*}}
 *
 * @param dispatch
 * @param getState
 * @returns {function(): function()}
 */
export function serviceProviderReduxMiddleware({dispatch}) {
  const response = SocketClient.on('response', ({event, params, response}) => {
    console.log(event, params, response);
    dispatch({
      type: event,
      params,
      response
    })
  });

  console.log('should only be called once');

  return next => action => {
    return next(action);
  };
}

/**
 * Wraps a component in a provider with the store, and all middlewares.
 * @param {React.Component} Comp
 * @param {PlainObject} initialState
 * @returns {{store: Object, component: XML}}
 */
export function wrapComponentInProvider(Comp, initialState = {}) { // eslint-disable-line react/display-name
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, serviceProviderReduxMiddleware));
  const component = (
    <Provider store={store}>
      <Comp />
    </Provider>
  );

  return {
    state: store.getState(),
    component
  };
}

/**
 * Renders a component wrapped in a provider with the stores.
 * @param {React.Component} Comp - The react component you want to render.
 * @param {String} target - The html id of the target you want to render into.
 */
export function renderComponent(Comp, target) {
  let initialState = {};
  if (typeof window !== 'undefined') {
    let jsonData = document.getElementById('initialState');
    if (jsonData && jsonData.innerHTML && jsonData.innerHTML.length > 0) {
      initialState = JSON.parse(jsonData.innerHTML);
    }
  }

  ReactDOM.render(
    wrapComponentInProvider(Comp, initialState).component,
    document.getElementById(target)
  );
}
