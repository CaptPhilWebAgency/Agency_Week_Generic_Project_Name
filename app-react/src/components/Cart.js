import React, { Component } from 'react';
// import { browserHistory } from 'react-router'

import HeaderSub from './HeaderSub';
import CartItem from './CartItem';
import Footer from './Footer';
<<<<<<< HEAD
=======

>>>>>>> 14e9d8f507fca76c0fa54d60f14d167e9864a22e
class Cart extends Component {
  render() {

    return (
      <div>
        <HeaderSub />
        <h2 className="sectionHeaders">Cart</h2>
          <div className="columns is-multiline is-mobile">
            <div className="productsList">
              <CartItem productImg="./img/igp20.png" productTitle="Rocky Mountain" productPrice="$134" selectedQuantity="1" />
              <CartItem productImg="./img/igp21.png" productTitle="BANFF Canada" productPrice="$84" selectedQuantity="1"/>
              <CartItem productImg="./img/igp22.png" productTitle="Mt Rainier" productPrice="$42" selectedQuantity="1"/>
              <CartItem productImg="./img/igp23.png" productTitle="Yellowstone" productPrice="$24" selectedQuantity="1"/>
            </div>
          </div>
<<<<<<< HEAD
=======

>>>>>>> 14e9d8f507fca76c0fa54d60f14d167e9864a22e
          <Footer />
      
      </div>
    );
  }
}
export default Cart;