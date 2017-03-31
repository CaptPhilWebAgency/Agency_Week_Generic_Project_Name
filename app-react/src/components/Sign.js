import React, { Component } from 'react';
// import { browserHistory } from 'react-router'

class Sign extends Component {
  render() {
    return <div className="modal-container">
      <div className="login-modal">
        <div className="columns featureCard">
          <div className="column is-one-third-mobile is-one-third-mobile-centered is-offset-one-quarter is-one-quarter-tablet is-gapless featureImgCol">
            <h4>Sign Up</h4>
              <div className="field">
                <label className="label">First Name</label>
                <p className="control">
                  <input className="input" type="text"/>
                </p>
              </div>

              <div className="field">
                <label className="label">Last Name</label>
                  <p className="control">
                    <input className="input" type="text"/>
                  </p>
              </div>

              <div className="field">
                <label className="label">Address Street Number and Name</label>
                  <p className="control">
                    <input className="input" type="text" placeholder="Street number and name"/>
                  </p>
              </div>

              <div className="field">
                <label className="label">Address 2</label>
                  <p className="control">
                    <input className="input" type="text" placeholder="P.O. box or apartment number"/>
                  </p>
              </div>

              <div className="field">
                <label className="label">Address 3</label>
                  <p className="control">
                    <input className="input" type="text" placeholder="Overseas information or country code"/>
                  </p>
              </div>

              <div className="field">
                <label className="label">City</label>
                  <p className="control">
                    <input className="input" type="text"/>
                  </p>
              </div>

              <div className="field">
                <label className="label">State Abbreviation</label>
                  <p className="control">
                    <input className="input" type="text"/>
                  </p>
              </div>

              <div className="field">
                <label className="label">Zip Code</label>
                  <p className="control">
                    <input className="input" type="text"/>
                  </p>
              </div>

              <div className="field">
                <p className="control">
                  <label className="label">Email</label>
                  <input className="input" type="email" />
                </p>
              </div>

              <div className="field">
                <p className="control">
                  <label className="label">Password</label>
                  <input className="input" type="password" />
                </p>
              </div>

              <div className="field">
                <label className="label">Credit Card Information</label>
                  <p className="control has-icon">
                    <input className="input" type="text" placeholder="Stripe Credit Card Form Goes Here"/>
                    <span className="icon is-small">
                      <i className="fa fa-cc-stripe"></i>
                    </span>
                  </p>
              </div>

              <div className="field is-grouped">
                <p className="control">
                  <button className="button">Submit</button>
                </p>
              </div>
            </div>
            
            <div className="featureContent column is-one-third-mobile is-one-third-mobile-centered is-one-quarter-tablet is-gapless">
              <h4>Login</h4>
                <div className="field">
                  <p className="control">
                    <label className="label">Email</label>
                    <input className="input" type="email" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                  <label className="label">Password</label>
                    <input className="input" type="password" />
                  </p>
                </div>
                <div className="field is-grouped">
                  <p className="control">
                    <button className="button">Login</button>
                  </p>
                </div>
            </div>
            <button className="modal-close"></button>
      </div>
      </div>
    </div>
  }
}

export default Sign;