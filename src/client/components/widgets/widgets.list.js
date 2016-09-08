import connect from '../../State/connect';

import Gridlist from './gridlist.component';
import SearchField from './search.widget';

const widgets = new Map();

function setupWidget(widget) {
  widget.admin = connect(widget.admin);
   widgets.set(widget.name, widget);
}

[Gridlist, SearchField].map(setupWidget);

export default widgets;
