import React, { Component } from 'react';
// import { browserHistory } from 'react-router';
<<<<<<< HEAD
=======

>>>>>>> 14e9d8f507fca76c0fa54d60f14d167e9864a22e
class CartItem extends Component {
    render() {
        return <div className="column is-one-third-mobile is-one-third-tablet is-one-quarter-desktop is-offset-4 productCard">
            <div className="section">
<<<<<<< HEAD
                <img className="productImgBuild" src={this.props.productImg} alt="cart item"/>
=======

                <img className="productImgBuild" src={this.props.productImg} alt="cart item"/>

>>>>>>> 14e9d8f507fca76c0fa54d60f14d167e9864a22e
                <h4 className="productTitleBuild">{this.props.productTitle} &#8212; <span className="productPriceBuild">{this.props.productPrice}</span></h4>
                <h4 className="productQuantityBuild">Quantity {this.props.selectedQuantity}</h4>
                <p className="field is-grouped">
                    <a className="button is-outlined">
                        <span>Edit Item</span>
                        <span className="icon is-small">
                        <i className="fa fa-times"></i>
                        </span>
                    </a>
                   <a className="button is-danger is-outlined">
                        <span>Remove Item</span>
                        <span className="icon is-small">
                        <i className="fa fa-times"></i>
                        </span>
                    </a>
                </p>
<<<<<<< HEAD
         </div>
=======
      </div>

>>>>>>> 14e9d8f507fca76c0fa54d60f14d167e9864a22e
    </div>
  }
}
<<<<<<< HEAD
=======

>>>>>>> 14e9d8f507fca76c0fa54d60f14d167e9864a22e
export default CartItem;
