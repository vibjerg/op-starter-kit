import React from 'react';
import connect from '../../State/connect';


import './dragndrop.scss';

class Drag extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dragging: props.dragging || false,
      pos: {
        top: 0,
        left: 0
      }
    };
    this.diff ={x: -10, y:-10};
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
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
    window.addEventListener('mouseup', this.onMouseUp);
  }
  onMouseUp (e) {
    e.preventDefault();
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
  }

  componentDidMount() {
    if (this.state.dragging) {
      this.props.actions.ui('drag', this.props.children);
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
    }
  }

  componentWillUnmount() {
    this.props.actions.ui('drop');
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
  }

  render() {
    return (
      <div className={`dragndrop ${this.state.dragging && 'dragging' || ''}`} ref="dragging" onMouseDown={e => this.onMouseDown(e)} style={this.state.pos}>
        {this.props.children}
      </div>
    );
  }
}


export default connect(Drag);
