import React from 'react';

import './gridlist.component.scss';

function SearchResult({Layout, list, Component}) {
  return(
    <Layout>
      hep hep
      {list.map(item => <Component {...item}/>)}
    </Layout>
  );
}

const SearchResultContainer = function(props) {
  const {layout, component} = props;
  const result = props.data.search.result;
  return (<SearchResult list={result || []} Component={component} Layout={layout} />);
}
class SearchResultAdminContainer extends React.Component {

  render() {
    const {layout, component, data} = this.props;
    const result = data && data.search.images.length &&  data.search.result || [0,1,2,3,4,5,6,7,8];
    return (<SearchResult list={result || []} Component={component} Layout={layout} />);
  }
}

function GridlistDefaultElement(props) {
  console.log(props);
  if (!props.pid) {
    return(<div class="default-element">Grid element</div>);  
  }
  
  return (
    <div className="work">
      <img src={props.coverUrlFull} alt=""/>
    </div>
  )
}

function Grid(props) {
  return (
    <div className="layout grid">
      {props.children}
    </div>
  );
}

export default {
  name: 'Searchresults',
  admin: SearchResultAdminContainer,
  config: {
    layouts: [Grid],
    components: [GridlistDefaultElement],
  },
  defaults: {
    component: GridlistDefaultElement,
    layout: Grid
  }
};
