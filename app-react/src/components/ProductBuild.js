import React, { Component } from 'react';
// import { browserHistory } from 'react-router';

class Product extends Component {
  render() {
    return (<div className="column is-one-third-mobile is-one-third-tablet is-one-quarter-desktop is-offset-4 productCard">
      <div className="section">
          <img className="productImgBuild" src={this.props.productImg} />
          <h4 className="productTitleBuild">{this.props.productTitle} &#8212; <span className="productPriceBuild">{this.props.productPrice}</span></h4>
      </div>

    </div>
    );
  }
}

export default Product;