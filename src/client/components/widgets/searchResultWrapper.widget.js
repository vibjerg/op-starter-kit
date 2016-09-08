import React from 'react';

export default function SearchWidget(props) {


  return (

    <div class="searchresult widget">
      {props.data.search.result.map(WorkListElement)}
    </div>
  );
}

SearchWidget.widgetize = {
  name: 'searchresult',
  connect: true
};


function WorkListElement(props) {
  return (
    <div className="work">
      {props.coverUrlFull && <img src={props.coverUrlFull} alt=""/>}
      <h2>{props.dcTitle.join(', ')}</h2>
    </div>
  );

}
