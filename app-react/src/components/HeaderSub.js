import React, { Component } from 'react';

class HeaderSub extends Component {
  render() {
    return (<header className="headerSub">
          <nav className="nav">
            <div className="nav-left">
              <a className="nav-item logo">
                <img className="logoImage" src="./img/ironglorylogo.png" alt="Iron Glory logo"/>
              </a>
            </div>

            {/*This "nav-toggle" hamburger menu is only visible on mobile -->*/}
            {/*<!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->*/}
            <span className="nav-toggle">
              <span> {/*search <i className="fa fa-search searchIcon" aria-hidden="true"></i>*/}</span>
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
              <a className="nav-item">
                products
              </a>
              <a className="nav-item">
                login
              </a>
              <a className="nav-item">
                <i className="fa fa-shopping-cart cartIcon" aria-hidden="true"></i>
              </a>
            </div>
          </nav>
      </header>
    );
  }
}

export default HeaderSub;