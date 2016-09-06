import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from '../../State/actions';
import WidgetPresenter from '../widgetPresenter/widgetPresenter.component';

import TestOne from '../widgets/testOne.component';
import TestTwo from '../widgets/testTwo.component';
/*import {Provider} from 'redux-react';
import rootReducer from ''

const store = createStore(rootReducer);
const component = (
  <Provider store={store}>
    <Comp />
  </Provider>
);*/

const connector = connect(
  // Map redux state to group prop
  (state) => {
    return state;
  },

  // Map group actions to actions props
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch),
    };
  }
);

const widgetsComponents = {
  testOne: connector(TestOne),
  testTwo: connector(TestTwo)
};

export default class PageBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets : [],
    }
  }

  onSelect(name) {
    this.state.widgets.push(widgetsComponents[name]);

    this.setState({widgets: this.state.widgets});
  }

  render(){
    return (
      <div>
        <WidgetPresenter select={(name) => this.onSelect(name)}/>
        <div className="page-container">
          {this.state.widgets.map((element, key)=> {
            return React.createElement(element, {key});
          })}
        </div>

      </div>
    );

  }
}