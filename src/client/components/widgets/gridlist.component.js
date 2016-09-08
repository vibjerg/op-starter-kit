import React from 'react';

import './gridlist.component.scss';


export default function Gridlist(props) {
  const children = props.data.search.result.map(item => {
    if (props.children && props.children.length) {
      return props.children.map(child => {
        return React.cloneElement(child, item);
      });
    }
    else {
      return (<div className="gridElement"> no widgets</div>);
    }

    });
  return (
    <div className="gridlist">
      {children || 'ingen resultater'}
    </div>
  );
}
Gridlist.widgetize = {
  name: 'GridList',
  connect: true,
  extendable: true
};
