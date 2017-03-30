import React, { Component } from 'react';
// import { browserHistory } from 'react-router'

class Sign extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-background"></div>
          <div className="modal-content">
              <div className="columns featureCard">
                <div className="column is-one-third-mobile is-one-third-mobile-centered is-offset-one-quarter is-one-quarter-tablet is-gapless featureImgCol">
                  <h4>Sign Up</h4>
                    <div className="field">
                      <label className="label">Email</label>
                      <p className="control">
                          <input className="input" type="text" placeholder="Email input"/>
                      </p>
                    
                      <label className="label">Password</label>
                        <p className="control has-icon has-icon-right">
                          <input className="input" type="text" placeholder="Text input"/>
                        </p>

                      <div className="field is-grouped">
                        <p className="control">
                          <button className="button is-primary">Submit</button>
                        </p>
                        <p className="control">
                          <button className="button is-link">Cancel</button>
                        </p>
                      </div>

                    </div>
              
                <div className="featureContent column is-one-third-mobile is-one-third-mobile-centered is-one-quarter-tablet is-gapless">
                  <h4>Login</h4>

                </div>
              </div>


            </div>
          </div>
       <button className="modal-close"></button>
      </div>
    );
  }
}

export default Sign;