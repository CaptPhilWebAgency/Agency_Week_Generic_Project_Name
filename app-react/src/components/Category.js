import React, { Component } from 'react';

class Category extends Component {
    // You only need constructor
    // constructor(props) {
    //     super(props);
    // }

    // You can read incoming props, like categoryTitle="", using this.props.categoryTitle ...wrapping that in {} will output it to the productImage
    render() {
        return <div className="column is-half">
            <div className="section" style={{backgroundImage: 'url(' + this.props.categoryImage + ')'}}>
                <a href={this.props.link} className="catLink">
                    <h3 className="categoryTitle">{this.props.categoryTitle}</h3><br/>
                </a>
            </div>
        </div>
    }
}

export default Category;