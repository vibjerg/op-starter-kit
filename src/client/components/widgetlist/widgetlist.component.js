import React from 'react';
import Drag from '../dragndrop/drag.component';
import Widgets from '../widgets/widgets.list';

class ActivateDragableWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  onMouseUp(e) {
    window.removeEventListener('mouseup', this.onMouseUp);
    this.setState({active: false});
  }

  onMouseDown(e){
    this.setState({active: true});
    window.addEventListener('mouseup', this.onMouseUp)
  }

  renderActive() {
    const props = Object.assign({}, this.props.defaults);
    const Comp = this.props.admin;
    return (
      <Drag dragging={true} item={this.props}>
        <Comp {...this.props.defaults} />
      </Drag>
    );
  }

  renderPassive() {
    return <div onMouseDown={this.onMouseDown} className="widget">{this.props.name}</div>;
  }

  render() {
    console.log(JSON.stringify(this.props));
    return (
      <div className="draggable-widget">
        {this.renderPassive()}
        {this.state.active && this.renderActive()}
      </div>
    );
  }
}



export default function WidgetList() {
  const widgets = [];
  Widgets.forEach(widget => {
    console.log(JSON.stringify(widget));
    widgets.push(React.createElement(ActivateDragableWidget, widget));
  });
  return (
    <div className="widgetlist">
      {widgets}
    </div>
  );
}

