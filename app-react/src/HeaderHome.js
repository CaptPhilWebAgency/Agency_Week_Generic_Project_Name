import React, { Component } from 'react';
import Feature from './Feature';

class HeaderHome extends Component {
  render() {
    return (
      <header>
          <nav className="nav">
            <div className="nav-left">
              <a className="nav-item logo">
                <img src="./img/ironglorylogo.png" alt="Iron Glory logo"/>
              </a>
            </div>

            {/*This "nav-toggle" hamburger menu is only visible on mobile -->*/}
            {/*<!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->*/}
            <span className="nav-toggle">
              <span> {/*search <img src="./img/search.png" alt="icon of a magnifying glass"/>*/}</span>
              <span> {/*products*/}</span>
              <span> {/*login*/}</span>
              <span> {/*<img src="./img/cart.png" alt="icon of a shopping cart"/>*/}</span>
            </span>

            {/*<!-- This "nav-menu" is hidden on mobile -->*/}
            {/*<!-- Add the modifier "is-active" to display it on mobile -->*/}
            <div className="nav-right nav-menu">
              <a className="nav-item">
                search <img className="searchIcon" src="./img/search.png" alt="icon of a magnifying glass"/>
              </a>
              <a className="nav-item">
                products
              </a>
              <a className="nav-item">
                login
              </a>
              <a className="nav-item">
                <img className="cartIcon" src="./img/cart.png" alt="icon of a shopping cart"/>
              </a>
            </div>
          </nav>
          
          <div className="headerFeature">
            <Feature />
          </div>
      </header>
    );
  }
}

export default HeaderHome;
