import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Locations from './views/locations';
import Reports from './views/reports';
import registerServiceWorker from './registerServiceWorker';
import '/home/madame/weather-app/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';




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
