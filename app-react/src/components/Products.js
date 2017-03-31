import React, { Component } from 'react';
// import { browserHistory } from 'react-router'

import HeaderSub from './HeaderSub';
import ProductBuild from './ProductBuild';
import Footer from './Footer';

class Products extends Component {
  render() {

    return (
      <div>
        <HeaderSub />
          <h2 className="sectionHeadersSub">Patches</h2>
            <div className="productsSideMenu columns is-multiline is-mobile categories">
              <div className="column is-one-quarter">
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

                <br/>
                <h4>Sort By Category</h4>
                <a className="categoryTitlesProductsPage" href="">all</a><br/>
                <a className="categoryTitlesProductsPage" href="">music</a><br/>
                <a className="categoryTitlesProductsPage" href="">national parks</a><br/>
                <a className="categoryTitlesProductsPage" href="">farming</a><br/>
                <a className="categoryTitlesProductsPage" href="">movies</a>
              </div>
            

            <div className="column">
              <div className="columns is-multiline is-mobile categories">
                <ProductBuild productImg="./img/igp20.png" productTitle="Rocky Mountain" productPrice="$134" />
                <ProductBuild productImg="./img/igp21.png" productTitle="BANFF Canada" productPrice="$84" />
                <ProductBuild productImg="./img/igp22.png" productTitle="Mt Rainier" productPrice="$42" />
                <ProductBuild productImg="./img/igp23.png" productTitle="Yellowstone" productPrice="$24" />   
              </div>
          </div>
        </div>

          <Footer />
      </div>

    )
  }
};

export default Products;