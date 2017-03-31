import React, { Component } from 'react';
// import { browserHistory } from 'react-router';
class CartItem extends Component {
    render() {
        return <div className="column is-one-third-mobile is-one-third-tablet is-one-quarter-desktop is-offset-4 productCard">
            <div className="section">
                <img className="productImgBuild" src={this.props.productImg} alt="cart item"/>
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
         </div>
    </div>
  }
}
export default CartItem;
