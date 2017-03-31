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

              {categories}
            </div>

            <div className="productsList">
              <ProductBuild products={this.state.products} />
            </div>
          </div>

          <Footer />
      </div>
  }
};

export default Products;