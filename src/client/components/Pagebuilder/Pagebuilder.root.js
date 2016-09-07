import React from 'react';
import WidgetPresenter from '../widgetPresenter/widgetPresenter.component';
import DropZone from '../dropzone/dropzone.component';

import TestOne from '../widgets/testOne.component';
import TestTwo from '../widgets/testTwo.component';
import connect from '../../State/connect';

/*import {Provider} from 'redux-react';
import rootReducer from ''

const store = createStore(rootReducer);
const component = (
  <Provider store={store}>
    <Comp />
  </Provider>
);*/


const widgetsComponents = {
  testOne: connect(TestOne),
  testTwo: connect(TestTwo)
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
        <DropZone id="testzone"></DropZone>
        <div className="page-container">
          {this.state.widgets.map((element, key)=> {
            return React.createElement(element, {key});
          })}
        </div>

      </div>
    );

  }
}
