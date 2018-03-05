import React from 'react';
import { DataTable } from './table';
import { Header } from './header';
import { NavPanel } from './navpanel_react';
import { select } from '../services/database-connector.js';

class Locations extends React.Component {
	render() {
		return (
				<div className="App">
				<NavPanel />
				<Header title="Locations" />
				<div>
					<DataTable 
						titles={["#", "Name", "X", "Y"]}
						data={ [["1", "Tokio", "35.6584421", "139.7328635"],
								["2", "Helsinki", "60.1697530", "24.9490830"],
								["3", "New York", "40.7406905", "-73.9938438"],
								["4", "Amsterdam", "52.3650691", "4.9040238"],
								["5", "Tokio", "25.092535", "55.1562243"] ]} />
				</div>
			</div>
			);
	}
}

export default Locations;