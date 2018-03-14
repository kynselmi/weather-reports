import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './client/App';
import Locations from './client/views/locations';
import Reports from './client/views/reports';
import registerServiceWorker from './client/registerServiceWorker';
import '/home/madame/weather-app/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './client/index.css';




ReactDOM.render((
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={App} />
			<Route path="/index" exact component={App} />
			<Route path="/reports" component={Reports} />
			<Route path="/locations" component={Locations} />
		</Switch>
	</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
