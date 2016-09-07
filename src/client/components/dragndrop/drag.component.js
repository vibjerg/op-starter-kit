import React from 'react';
import connect from '../../State/connect';


import './dragndrop.scss';

class Drag extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      pos: {
        top: 0,
        left: 0
      }
    }
    this.onMouseMove = this.onMouseMove.bind(this);
  }
  onMouseMove(e) {
    this.setState({pos: {
      left: e.clientX + this.diff.x,
      top: e.clientY + this.diff.y
    }});
  }

  onMouseDown (e) {
    this.props.actions.ui('drag', this.props.children);
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

    window.addEventListener('mousemove', this.onMouseMove);
  }
  onMouseUp (e) {
    this.props.actions.ui('drop');
    e.preventDefault();
    window.removeEventListener('mousemove', this.onMouseMove);
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


export default connect(Drag);
