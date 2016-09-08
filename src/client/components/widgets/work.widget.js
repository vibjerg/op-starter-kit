import React from 'react';

export default function Work(props) {
  console.log(props);
  if (props.drag || !props.pid) {
    return (
      <div className="widget drag">Værkvisningswidget</div>
    );
  }
  const preview = props.preview;
  return (
    <div className="work">
        {props.coverUrlFull && <img src={props.coverUrlFull} alt=""/>}
        <h2>{props.dcTitle.join(', ')}</h2>
        {props.children}
    </div>
  );
}


Work.widgetize = {
  name: 'work',
  connect: false,
  extendable: false
};
