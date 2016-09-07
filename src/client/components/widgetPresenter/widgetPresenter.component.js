import React from 'react';
import Drag from '../dragNdrop/drag.component';
export default function widgetPresenter({select}) {
  return (
    <div>
      <Drag><a href="#" onClick={() => select('testOne')}>TestOne</a></Drag>
      <a href="#" onClick={() => select('testTwo')}>TestTwo</a>
    </div>
  );
}
