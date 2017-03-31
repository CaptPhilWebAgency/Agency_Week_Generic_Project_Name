import React, { Component } from 'react';
// import { browserHistory } from 'react-router'

import HeaderSub from './HeaderSub';
import ProductBuild from './ProductBuild';
import Footer from './Footer';

class Products extends Component {

  constructor(props) {
    super(props)
    this.getCategories = this.getCategories.bind(this)
    this.getProducts = this.getProducts.bind(this)

    this.state = {
      categories: [],
      products: []
    }
  }

   componentWillMount() {
   this.getProducts()
   this.getCategories()
 }

  getCategories() {
  fetch('/api/categories')
      .then(response => response.json())
      .then(response => this.setState({categories: response}))
      // .then(response => console.log(response));
  }

 getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(response => this.setState({products: response}))
      // .then(response => console.log(response));
  }


  render() {

    let categories = this.state.categories.map((category, key) => {
      return <div key={key}>
        <a className="categoryTitlesProductsPage" href="">{category.name}</a><br/>
      </div>
    })
          // categories . . . no background images
      // hard code four or so products.
    return <div>
        <HeaderSub />
        <h2 className="sectionHeaders">Patches</h2>
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
<<<<<<< HEAD
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
=======
                {categories}
            </div>
            <div className="column">
                <ProductBuild products={this.state.products} />
>>>>>>> 14e9d8f507fca76c0fa54d60f14d167e9864a22e
            </div>
          </div>
        <Footer />
      </div>
  }
};

export default Products;