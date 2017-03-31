import React, { Component } from 'react';
// import { browserHistory } from 'react-router'

class Sign extends Component {
  render() {
    return (

      // QQGABE: the idea was to use bulma modal tags and put basically the same exact code as I used for the feature box, except one side would be the sign up and one would be the login. I have no idea if that worked or not, because I can't see it in the browser. 
      // I was thinking of adding the alternative logo that he had (the one that isn't bright pink) with the modal somehow, and then playing around with button/h4 colors . . . or even shading somehow in something other than normal gray. But . . . that was for fiddling with AFTER the rest is done.
      // And . .  . now that I look at it, this is pretty repetitive. We could have it all in one box with three buttons--sign up, loggin, and cancel, if you don't think that would be too confusing. Though there might be some JS or backend-connection reason for leaving them in two separate form fields. 
      // I'm leaving the feature classNames in here for now. will have to work on style when I can see it, and will change classNames then.
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
                        <p className="control">
                          <input className="input" type="text" placeholder="Text input"/>
                        </p>

                      <div className="field is-grouped">
                        <p className="control">
                          <button className="button">Login</button>
                        </p>
                      </div>

                    </div>
              
                <div className="featureContent column is-one-third-mobile is-one-third-mobile-centered is-one-quarter-tablet is-gapless">
                  <h4>Login</h4>
                    <div className="field">
                      <label className="label">Email</label>
                      <p className="control">
                          <input className="input" type="text" placeholder="Email input"/>
                      </p>
                    
                      <label className="label">Password</label>
                        <p className="control">
                          <input className="input" type="text" placeholder="Text input"/>
                        </p>

                      <div className="field is-grouped">
                        <p className="control">
                          <button className="button">Submit</button>
                        </p>
                      </div>

                    </div>
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