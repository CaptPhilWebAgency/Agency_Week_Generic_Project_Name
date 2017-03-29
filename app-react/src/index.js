import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Products from './components/Products'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={Home}>
        <IndexRoute component={Home} />
        <Route path="products/:productId" component={Products} />
    </Route>
  </Router>,

  document.getElementById('root')
);
