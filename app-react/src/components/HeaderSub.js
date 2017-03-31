import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class HeaderSub extends Component {
  render() {
    return (<header className="headerSub">
          <nav className="nav">
            <div className="nav-left">
              <a className="nav-item logo">
                <img className="logoImage" src="./img/ironglorylogo.png" alt="Iron Glory logo"
                onClick={() => browserHistory.push('/')}/>
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
              <a className="nav-item" onClick={() => browserHistory.push('/products')}>
                products
              </a>
              <a className="nav-item" onClick={() => browserHistory.push('/login')}>
                login
              </a>
              <a className="nav-item">
                <span className="glyphicon glyphicon-shopping-cart cartIcon" aria-hidden="true"
                 onClick={() => browserHistory.push('/cart')}></span>
              </a>
            </div>
          </nav>
      </header>
    );
  }
}

export default HeaderSub;