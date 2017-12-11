import React from 'react'
// layouts
import Blank from '../components/layouts/Blank.js';
// views
import Home from '../views/Home.js';
import subscribeConfirm from '../views/subscribeConfirm.js';
import subscribeThanks from '../views/subscribeThanks.js';

import { Route, Router, IndexRedirect, IndexRoute} from 'react-router';

export default (
	<Router>
		<Route path={"/"} component={Blank}>
			<IndexRoute component={Home}/>
			<Route path={"index"} component={Home} />
			<Route path={"confirm-email"} component={subscribeConfirm} />
			<Route path={"thank-you"} component={subscribeThanks} />
    </Route>
	</Router>
);
