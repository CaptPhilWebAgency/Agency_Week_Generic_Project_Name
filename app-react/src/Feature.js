import React, { Component } from 'react';

class Feature extends Component {
  render() {
    return (
      <div>
        {/*<!-- QQGabe: okay to change "products" to "patch" in the h2? Since they only sell patches and he wants just one a day? -->*/}
        <h2 className="sectionHeaders">Today's Featured Patch</h2>
        <div className="columns featureCard">
          <div className="column is-one-third-mobile is-offsett-one-quarter is-one-quarter-tablet is offset-one-quarter is-one-quarter-desktop is-offset-one-quarter is-gapless featureImgCol">
          {/*img src and alt will need to be replaced with state or props or whatever*/}
            <img src="./img/igp2.png" alt="photo of TITLE HERE" />
          </div>
          
          <div className="featureContent column is-one-third-mobile is-one-quarter-tablet is-one-quarter-desktop is-half is-gapless">
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