import connect from '../../State/connect';

import TestOne from './testOne.component';
import TestTwo from './testTwo.component';
import Gridlist from './gridlist.component';
import Search from './search.widget';
import SearchResult from './searchResultWrapper.widget';
import Work from './work.widget';


const widgets = new Map();

function setupWidget(element) {
 if (element.widgetize) {
   const settings = element.widgetize;
   const component = settings.connect && connect(element) || element;
   widgets.set(settings.name, component);
 }
}

[TestOne, TestTwo, Search, SearchResult, Gridlist, Work].map(setupWidget);

export default widgets;
