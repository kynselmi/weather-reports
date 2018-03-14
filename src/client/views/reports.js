import React from 'react';
import { DataTable } from './table';
import { Header } from './header';
import { NavPanel } from './navpanel_react';

class Reports extends React.Component {
	render() {
		return (
			<div className="App">
				<NavPanel />
				<Header title="Reports" />
				<div>
					<DataTable 
						titles={["#", "Location", "Temperature"]}
						//data={ [{id:1, location:"Espoo", temperature:"25"},
						//				{id:2, location:"Helsinki", temperature:"15"}] }
						data={[ [1, "Espoo", 25], 
										[2, "Helsinki", 15 ] ]}
						/>
				</div>
			</div>
			);
	}
} 

export default Reports;