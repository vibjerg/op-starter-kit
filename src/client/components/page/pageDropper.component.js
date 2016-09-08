import React from 'react';
import Widgets from '../widgets/widgets.list';
import Dropzone from '../dropzone/dropzone.component';

import './page.scss';

function parseComponents(elements, path) {
  return elements.map((element, i) => {
    const key = `${path}.${i}.children`;
    const component = Widgets.get(element.component);
    const children = element.children && parseComponents(element.children, key) || null;
    return WrapInWidgetWrapper(component, children, key);
  });
}


export default class PageDropper extends React.Component {
  componentDidMount() {
    if (!this.props.ui.pages[this.props.id]) {
      this.props.actions.ui('addPage', this.props.id);
    }

  }

  render(){
    const components = this.props.ui.pages[this.props.id] || [];
    console.log(components);
    if (!components.length) {
      return (
        <div className="page teaser">smid en widget!</div>
      )
    }

    return (
      <div className="page">
        {parseComponents(components, this.props.id)}
      </div>
    );
  }
}


function WrapInWidgetWrapper(element, children, key) {
  const settings = element.widgetize;
  const component = React.createElement(element, {key, preview: (<Preview {...settings} />)}, children);
  return settings.extendable && <Dropzone id={key}>{component}</Dropzone> || component;
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
