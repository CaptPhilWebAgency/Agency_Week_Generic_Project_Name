import React, { Component } from 'react'
import { browserHistory } from 'react-router'


class App extends Component {
  constructor(props) {
    super(props)
    this.getProducts = this.getProducts.bind(this)

    this.state = {
      originalProducts: [],
      products: []
    }
  }

// getProducts();

// const getProducts() {
//         fetch('/api/products')
//             .then(response => response.json())
//             .then(data => {
//                 products = data
//                 loopProducts(products);
//             });
//     }

//     const loopProducts(products) {
//         products.forEach(createProducts => {
//             console.log(createProducts)
//         }) 
        
//     }

  filterProducts(filters) {
    let products = this.state.originalProducts
    products = products.filter(function(product) {
      return product.name.includes('the')
    })

    this.setState({
      products: products
    })
  }

  render() {
    return <div>
      <h1>Iron Glory ajax & Route Testing</h1>
      <a onClick={() => browserHistory.push('/categories/2')}>home</a>
      {this.props.children}
    </div>
  }
}

export default App;
