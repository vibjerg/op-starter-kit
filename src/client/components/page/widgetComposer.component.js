import React from 'react';
import Widgets from '../widgets/widgets.list';
import Dropzone from '../dropzone/dropzone.component';
import connect from '../../State/connect';

import './page.scss';

function parseComponents(elements, path) {
  console.log(elements);
  return elements.map((element, i) => {
    const key = `${path}.${i}.children`;
    console.log(key);
    const component = Widgets.get(element.component);
    console.log(component);
    const children = element.children && parseComponents(element.children, key) || null;
    return WrapInWidgetWrapper(component, children, key);
  });
}


export default class widgetComposer extends React.Component {
  componentDidMount() {
    if (!this.props.ui.pages[this.props.id]) {
      this.props.actions.ui('addPage', this.props.id);
    }

  }

  render(){
    const components = this.props.ui.pages[this.props.id] || [];
    console.log(components);
    /*if (!components.length) {
      return (
        <div className="page teaser">smid en widget!</div>
      )
    }*/

    return (
      <div className="page">
        {parseComponents(components, this.props.id)}
      </div>
    );
  }
}


function WrapInWidgetWrapper(element, children, key) {
  const Comp = element.admin;
  return <Comp {...element.defaults}/>;
}


import './widgetwrapper.scss';

function Preview(props) {
  return (
    <div className="widget wrapper">
      <div className="title">{props.name}</div>
      {props.children}
    </div>
  );
}
