import React, { Component } from 'react';
import Feature from './Feature';

class HeaderHome extends Component {
  render() {
    return (
      <header>
          <nav className="nav">
            <div className="nav-left">
              <a className="nav-item logo">
                <img className="logoImage" src="./img/ironglorylogo.png" alt="Iron Glory logo"/>
              </a>
            </div>

            {/*This "nav-toggle" hamburger menu is only visible on mobile -->*/}
            {/*<!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->*/}
            <span className="nav-toggle">
              <span> {/*search <span className="glyphicon glyphicon-search searchIcon" aria-hidden="true"></span>*/}</span>
              <span> {/*products*/}</span>
              <span> {/*login*/}</span>
              <span> {/*<span className="glyphicon glyphicon-shopping-cart cartIcon" aria-hidden="true"></span>*/}</span>
            </span>

            {/*<!-- This "nav-menu" is hidden on mobile -->*/}
            {/*<!-- Add the modifier "is-active" to display it on mobile -->*/}
            <div className="nav-right nav-menu">
              <a className="nav-item">
                search <span className="glyphicon glyphicon-search searchIcon" aria-hidden="true"></span>
              </a>
              <a className="nav-item">
                products
              </a>
              <a className="nav-item">
                login
              </a>
              <a className="nav-item">
                <span className="glyphicon glyphicon-shopping-cart cartIcon" aria-hidden="true"></span>
              </a>
            </div>
          </nav>
          
          <div className="headerFeature">
          <h2 className="sectionHeaders">Today's Featured Patch</h2>
            <Feature />
          </div>

          <div className="categoriesGrid">
            
          </div>
      </header>
    );
  }
}

export default HeaderHome;
