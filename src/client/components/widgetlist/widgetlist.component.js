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
    const component = React.createElement(this.props.widget, {key: this.props.widget.widgetize.name, drag:true});
    //console.log(component);
    //component.widgetize = this.props.widget.widgetize;
    return (
      <Drag dragging={true}>
        {component}
      </Drag>
    );
  }

  renderPassive() {
    return <div onMouseDown={this.onMouseDown} className="widget">{this.props.widget.widgetize.name}</div>;
  }

  render() {
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
    widgets.push(React.createElement(ActivateDragableWidget, {widget, key: widget.widgetize.name}));
  });
  return (
    <div className="widgetlist">
      {widgets}
    </div>
  );
}

