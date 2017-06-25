import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import BookSearch from './containers/BookSearch'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path="*" component={App}>
    <IndexRoute component={BookSearch}/>
  </Route>
);
