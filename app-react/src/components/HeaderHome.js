import React, { Component } from 'react';
import Feature from './Feature';
import { browserHistory } from 'react-router'

class HeaderHome extends Component {
  render() {
    return (
      <header className="headerHome">
          <nav className="nav">
            <div className="nav-left">
              <a className="nav-item logo">
                <img className="logoImage" src="./img/ironglorylogo.png" alt="Iron Glory logo"/>
              </a>
            </div>

            {/*This "nav-toggle" hamburger menu is only visible on mobile -->*/}
            {/*<!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->*/}
            <span className="nav-toggle">
              <span> {/*search <i className="fa fa-search searchIcon searchIcon" aria-hidden="true"></i>*/}</span>
              <span> {/*products*/}</span>
              <span> {/*login*/}</span>
              <span> {/*<i className="fa fa-shopping-cart cartIcon" aria-hidden="true"></i>*/}</span>
            </span>

            {/*<!-- This "nav-menu" is hidden on mobile -->*/}
            {/*<!-- Add the modifier "is-active" to display it on mobile -->*/}
            <div className="nav-right nav-menu">
              <a className="nav-item">
                search <i className="fa fa-search searchIcon" aria-hidden="true"></i>
              </a>
              <a className="nav-item" onClick={() => browserHistory.push('/products')}>
                products
              </a>
              <a className="nav-item" onClick={() => browserHistory.push('/login')}>
                login
              </a>
              <a className="nav-item" onClick={() => browserHistory.push('/cart')}>
                <i className="fa fa-shopping-cart cartIcon" aria-hidden="true"></i>
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
