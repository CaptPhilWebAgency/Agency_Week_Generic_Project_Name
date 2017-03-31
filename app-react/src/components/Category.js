import React, { Component } from 'react';

class Category extends Component {
    // You only need constructor
    // constructor(props) {
    //     super(props);
    // }



    // You can read incoming props, like categoryTitle="", using this.props.categoryTitle ...wrapping that in {} will output it to the productImage
    render() {
        let categories = this.props.category.map((category, key) => {
            return <div className="column is-half" key={key}>
                <div className="section" style={{backgroundImage: 'url(' + category.image + ')'}}>
                    <a href="#" className="catLink">
                        <h3 className="categoryTitle">{category.name}</h3><br/>
                    </a>
                </div>
            </div>
        })
        return <div className="columns is-multiline is-mobile categories">
            {categories}
        </div>
            
    }
}

export default Category;