import React from 'react';

function SearchWidget(props) {

  return (
    <div className="search widget">
      <form action="" onSubmit={(e) => {e.preventDefault(); props.actions.request('search', {q: props.ui.search.query, limit:20})}}>
        <input type="text" value={props.ui.search.query || ''} onChange={e => props.actions.ui('query', e.currentTarget.value)} />
        <input type="submit" value="Søg"/>
      </form>
    </div>
  );
}

export default {
  name: 'search',
  admin: SearchWidget
};
