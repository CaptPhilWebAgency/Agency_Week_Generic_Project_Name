import React, { Component } from 'react';
// import { browserHistory } from 'react-router';

class Product extends Component {
  render() {
<<<<<<< HEAD
    return (<div className="column is-one-third productCard">
      <div className="section">

          <img className="productImgBuild" src={this.props.productImg} alt="patch"/>
          <h4 className="productTitleBuild">{this.props.productTitle} &#8212; <span className="productPriceBuild">{this.props.productPrice}</span></h4>
          <p className="control has-text-centered">
=======

    let products = this.props.products.map((product, key) => {
      return <div className="column is-one-third productCard" key={key}>
        <div className="section">
            <img className="productImgBuild" src={product.image.url} alt="patch"/>
            <h4 className="productTitleBuild">{product.name} &#8212; <span className="productPriceBuild">${product.price}</span></h4>
            <p className="control has-text-centered">

>>>>>>> 14e9d8f507fca76c0fa54d60f14d167e9864a22e
            <button type="button" className="button cartButton">
                Add to cart
            </button>
          </p>

        </div>

      </div>
    })
    return <div className="columns is-multiline is-mobile categories">
      {products}
    </div>
  }
}

export default Product;