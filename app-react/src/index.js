import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory/*, IndexRoute*/ } from 'react-router';

// I'm making temporary routes just so I can see stuff when I'm building it. I know we won't really need a route for the Product build page. We also talked about both the Sign (in and up) and Success messages being modals. AND i didn't mess with needing IDs, which I know you'll have to add.  But, for tonight, I'll have routes so I can see what on earth I'm building. 

import Home from './components/Home';
// import Sign from './components/Sign';
// import ProductBuild from './components/ProductBuild';
import Products from './components/Products';
// import ProductSelected from './components/ProductSelected';
import Cart from './components/Cart';
// import Success from './components/Success';

ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/products" component={Products} />
    <Route path="/cart" component={Cart} />

</Router>,

  document.getElementById('root')
);


/*    <Route path="/sign" component={Sign} />
    <Route path="/productbuild" component={ProductBuild} />
    <Route path="/productselected" component={ProductSelected} />
     */