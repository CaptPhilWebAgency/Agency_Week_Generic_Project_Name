import React, { Component } from 'react';
import HeaderHome from './HeaderHome';
import Category from './Category';
import Footer from './Footer';
<<<<<<< HEAD
import Sign from './Sign';
=======

>>>>>>> 14e9d8f507fca76c0fa54d60f14d167e9864a22e
// import Products from './Products';
// import { browserHistory } from 'react-router'

class Home extends Component {
<<<<<<< HEAD
=======

>>>>>>> 14e9d8f507fca76c0fa54d60f14d167e9864a22e

  constructor(props) {
    super(props)
    this.getCategories = this.getCategories.bind(this)

    this.state = {
      categories: []
    }
  }

   componentWillMount() {
   this.getCategories()
 }

  getCategories() {
  fetch('/api/categories')
      .then(response => response.json())
      .then(response => this.setState({categories: response}))
      // .then(response => console.log(response));
  }

  render() {

    return (
      <div>
        <HeaderHome />
        <h2 className="sectionHeaders">Categories</h2>
        <div className="categorySection">
            <div>
              <Category category={this.state.categories}/>
            </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
