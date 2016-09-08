import React from 'react';
import WidgetList from '../widgetlist/widgetlist.component';
import DropZone from '../dropzone/dropzone.component';
import PageComponent from '../page/page.component';
import PageDropperComponent from '../page/pageDropper.component';
import connect from '../../State/connect';

const Page = connect(PageComponent);
const PageDropper = connect(PageDropperComponent);


export default class PageBuilder extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      preview: false
    }
  }

  renderDropper() {
    return (
      <DropZone id="testzone">
        <PageDropper id="testzone"/>
      </DropZone>
    );
  }

  renderPreview() {
    return(
      <Page id="testzone"></Page>
    );
  }

  render(){
    return (
      <div className="pagebuilder">

        <WidgetList />
        <input type="checkbox" defaultValue={false} onChange={e => this.setState({preview: !this.state.preview})}/>
        <div className="builder">
          {this.state.preview && this.renderPreview() || this.renderDropper()}
        </div>

      </div>
    );

  }
}
