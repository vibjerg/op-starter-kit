/**
 * @file: Entrypoint for all reducers
 * Combines the apps reducers to set the store context for all rendered components.
 */

import {combineReducers} from 'redux';
import agencyReducer from './agency.reducer';
import uiReducer from './ui.reducer';
import searchReducer from './search.reducer';
import entitySuggestReducer from './entitySuggestLibrary.reducer';
import reviewReducer from './review.reducer';
import widgetReducer from './widget.reducer';
import workReducer from './work.reducer';
import coverImageReducer from './coverImages.reducer';
import globalReducer from './globalContent.reducer';

import pagebuilder from './pagebuilder.reducer';

const rootReducer = combineReducers({
  agencyReducer,
  uiReducer,
  searchReducer,
  entitySuggestReducer,
  reviewReducer,
  widgetReducer,
  coverImageReducer,
  globalReducer,
  work: workReducer,
  ui: pagebuilder
});

export default rootReducer;
