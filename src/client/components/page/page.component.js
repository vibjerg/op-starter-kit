import React from 'react';
import Widgets from '../widgets/widgets.list';

function parseComponents(elements, path) {
  return elements.map((element, i) => {
    const key = `${path}.${i}.children`;
    const component = Widgets.get(element.component);
    const children = element.children && parseComponents(element.children, key) || null;
    return React.createElement(component, {key}, children);
  });
}


export default class Page extends React.Component {
  componentDidMount() {
    if (!this.props.ui.pages[this.props.id]) {
      this.props.actions.ui('addPage', this.props.id);
    }
  }

  render(){
    return (
      <div className="page">
        {parseComponents(this.props.ui.pages[this.props.id] || [], this.props.id)}
      </div>
    );
  }
}
