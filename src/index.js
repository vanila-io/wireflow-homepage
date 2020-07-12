import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Css Files
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/home.css';
import './styles/newHome.css';
import './styles/responsive.css';

// Js Files
import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';

import routes from './config/routes';

class App extends React.Component {
  render() {
    return <Router history={browserHistory}>{routes}</Router>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
