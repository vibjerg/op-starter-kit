import React from 'react';

import connect from '../../State/connect';

import './dropzone.component.scss';

class Dropzone extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  onMouseMove(e) {

    if (this.props.ui.dragging) {
      const pos = this.refs.dropzone.getBoundingClientRect();

      if (e.clientX > pos.left && e.clientX < pos.right && e.clientY > pos.top && e.clientY < pos.bottom) {
        if (!this.state.hover) {
          this.setState({hover: true});
          this.props.actions.ui('dropzone', {id: this.props.id, active: true});
        }
      } else if (this.state.hover) {
        this.props.actions.ui('dropzone', {id: this.props.id, active: false});
        this.setState({hover: false});
      }
    }
    else if (this.state.hover) {
      this.props.actions.ui('dropzone', {id: this.props.id, active: false});
      this.setState({hover: false});
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove',e => this.onMouseMove(e));
  }

  render() {
    const hover = this.props.ui.dropzone && (this.props.ui.dropzone == this.props.id);
    return (
      <div className={`dropzone ${hover && 'hover' || ''} ${this.props.ui.dragging && 'dragging' || ''}`} ref="dropzone">
        {this.props.children}
      </div>
    );
  }
}

export default connect(Dropzone);
