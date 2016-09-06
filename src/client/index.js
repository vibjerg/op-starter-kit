import React from 'react';
import ReactDOM from 'react-dom';
import PageBuilder from './components/pageBuilder/Pagebuilder.root';
import {renderComponent} from './App';
renderComponent(PageBuilder, 'content');
//ReactDOM.render(<PageBuilder />, document.getElementById('content'));
