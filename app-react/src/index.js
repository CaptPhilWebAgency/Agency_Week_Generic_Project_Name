import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './components/App';
import Categories from './components/Categories'
import Products from './components/Products'

// global configurations
window.apiHost = "https://locahost:3001"

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Categories}/>
      <Route path="categories/:categoryId" component={Categories} />
      <Route path="products/:productId" component={Products}/>
    </Route>
  </Router>,

  document.getElementById('root')
);
