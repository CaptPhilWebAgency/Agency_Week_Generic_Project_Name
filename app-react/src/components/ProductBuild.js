import React, { Component } from 'react';
// import { browserHistory } from 'react-router';

class Product extends Component {
  render() {
    let products = this.props.products.map((product, key) => {
      return <div className="column is-one-third-mobile is-one-third-tablet is-one-quarter-desktop is-offset-4 productCard" key={key}>
        <div className="section">
            <img className="productImgBuild" src={product.image.url} alt="patch"/>
            <h4 className="productTitleBuild">{product.name} &#8212; <span className="productPriceBuild">${product.price}</span></h4>
        </div>
      </div>
    })
    return <div>
      {products}
    </div>
  }
}

export default Product;