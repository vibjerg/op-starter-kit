import React from 'react';
import {Provider} from 'redux-react';
import rootReducer from ''

const store = createStore(rootReducer);
const component = (
  <Provider store={store}>
    <Comp />
  </Provider>
);


// action.call('event', data, )


function workWidgetContainer() {


}
