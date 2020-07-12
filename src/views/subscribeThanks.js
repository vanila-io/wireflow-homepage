import React, {Component} from 'react';

import '..//styles/home.css'

export default class subscribeThanks extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    window.fbq('track', 'Confirmed Email', {
    value: 0,
    currency: 'USD'
    });
  }
    render() {
        return (
          <div className="container">
            <div className="jumbotron txtCenter">
              <h1>Thank you!</h1>
              <p>You successfully signed up as early adopter for automatio.co</p>
          </div>
          </div>
        );
    }
}
