import React, { Component } from 'react';
// import { browserHistory } from 'react-router'

import HeaderSub from './HeaderSub';
import ProductBuild from './ProductBuild';
import Footer from './Footer';

class Products extends Component {
  render() {
          // categories . . . no background images
      // hard code four or so products.
    return (
      <div>
        <HeaderSub />
        <h2 className="sectionHeaders">National Parks</h2>
          <div className="columns is-multiline is-mobile">
            <div className="column is-one-third-mobile is-one-third-tablet is-one-quarter-desktop is-offset-1">
              <div className="field has-addons">
                <p className="control">
                  <input className="input" type="text" placeholder="Search products"/>
                </p>
                <p className="control">
                  <a className="button">
                    Search
                  </a>
                </p>
              </div>

              <a className="categoryTitlesProductsPage" href="">all</a><br/>
              <a className="categoryTitlesProductsPage" href="">music</a><br/>
              <a className="categoryTitlesProductsPage" href="">national parks</a><br/>
              <a className="categoryTitlesProductsPage" href="">farming</a><br/>
              <a className="categoryTitlesProductsPage" href="">movies</a>
            </div>

            <div className="productsList">
              <ProductBuild productImg="./img/igp20.png" productTitle="Rocky Mountain" productPrice="$134" />
              <ProductBuild productImg="./img/igp21.png" productTitle="BANFF Canada" productPrice="$84" />
              <ProductBuild productImg="./img/igp22.png" productTitle="Mt Rainier" productPrice="$42" />
              <ProductBuild productImg="./img/igp23.png" productTitle="Yellowstone" productPrice="$24" />
            </div>
          </div>

          <Footer />
      </div>

    )
  }
};

export default Products;