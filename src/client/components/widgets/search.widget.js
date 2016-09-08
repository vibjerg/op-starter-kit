import React from 'react';

export default function SearchWidget(props) {

  return (
    <div className="search widget">
      <form action="" onSubmit={(e) => {e.preventDefault(); props.actions.request('search', {q: props.ui.search.query})}}>
        <input type="text" value={props.ui.search.query || ''} onChange={e => props.actions.ui('query', e.currentTarget.value)} />
        <input type="submit" value="Søg"/>
      </form>
    </div>
  );
}

SearchWidget.widgetize = {
  name: 'search',
  connect: true
};
