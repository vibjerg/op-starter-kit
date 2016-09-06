import React from 'react';

import './dragndrop.scss';

export default class DragNdrop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      pos: {
        top: 0,
        left: 0
      }
    }
  }
  onMouseMove(e) {
    this.setState({pos: {
      left: e.clientX + this.diff.x,
      top: e.clientY + this.diff.y
    }});
  }

  onMouseDown (e) {
    e.preventDefault();
    const pos = this.refs.dragging.getBoundingClientRect();
    this.diff = {
      x: pos.left - e.clientX,
      y: pos.top - e.clientY
    };
    this.setState({dragging: true, pos: {
      left: e.clientX + this.diff.x,
        top: e.clientY + this.diff.y
    }});

    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    console.log(pos);
  }
  onMouseUp (e) {
    window.removeEventListener('mousemove', this.onMouseMove.bind(this));
    const pos = this.refs.dragging.getBoundingClientRect();
    console.log(pos);
  }

  render() {
    return (
      <div className={`dragable ${this.state.dragging && 'dragging' || ''}`} ref="dragging" onMouseDown={e => this.onMouseDown(e)} onMouseUp={e => this.onMouseUp(e)} style={this.state.pos}>
        {this.props.children}
      </div>
    );
  }
}