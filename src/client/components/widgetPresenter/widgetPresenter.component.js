import React from 'react';
import Dragndrop from '../dragNdrop/dragNdrop.component';
export default function widgetPresenter({select}) {
  return (
    <div>
      <Dragndrop><a href="#" onClick={() => select('testOne')}>TestOne</a></Dragndrop>
      <a href="#" onClick={() => select('testTwo')}>TestTwo</a>
    </div>
  );
}