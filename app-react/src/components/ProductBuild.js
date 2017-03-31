import React, { Component } from 'react';
// import { browserHistory } from 'react-router';

class Product extends Component {
  render() {
    return (<div className="column is-one-third productCard">
      <div className="section">
          <img className="productImgBuild" src={this.props.productImg} alt="patch" />
          <h4 className="productTitleBuild">{this.props.productTitle} &#8212; <span className="productPriceBuild">{this.props.productPrice}</span></h4>
          <p className="control has-text-centered">
            <button type="button" className="button cartButton">
                Add to cart
            </button>
          </p>
      </div>

    </div>
    );
  }
}

export default Product;