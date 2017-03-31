import React, { Component } from 'react';

class Feature extends Component {
  render() {
    return (
      <div>
        
        <div className="columns featureCard">
          <div className="column is-one-third-mobile is-one-third-mobile-centered is-offset-one-quarter is-one-quarter-tablet is-gapless featureImgCol">
          {/*img src and alt will need to be replaced with state or props or whatever*/}
            <img src="./img/igp2.png" alt="TITLE HERE" />
          </div>
          
          <div className="featureContent column is-one-third-mobile is-one-third-mobile-centered is-one-quarter-tablet is-gapless">
           {/*h3, description, and price will need to be replaced with state or props or whatever*/}
            <h3 className="featureTitle">Led Zeppelin</h3>
            <p className="featureDescription">A classic Led Zeppelin patch, perfect for the gnarliest of Zep Heads.</p>
            <p className="featurePrice"><span className="dollarSign">$</span>12</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Feature;