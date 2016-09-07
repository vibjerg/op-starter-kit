import React from 'react';

import connect from '../../State/connect';
import TestOne from '../widgets/testOne.component';
import TestTwo from '../widgets/testTwo.component';

const widgetsComponents = {
  testOne: connect(TestOne),
  testTwo: connect(TestTwo)
};

const props = [{
  component: 'testWrapper',
  children: [
    {
      component: 'testOne'
    },
    {
      component: 'testTwo'
    }
  ],
}];

function parseComponents(elements) {
  elements.map(element => {
    const component = widgetsComponents[element.component];
    const children = element.children && parseComponents(element.children) || null
    return React.createElement(component, {children});
  });
}


export default class Page extends React.Component {
  constructor() {
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
      <div className="page">
        {parseComponents(this.props)}
      </div>
    );
  }
}
