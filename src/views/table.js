import React from 'react';
import { Table, Jumbotron } from 'reactstrap';
import { ObjectRow } from './objectrow';

export class DataTable extends React.Component {
	constructor(props) {
		super(props);

		this.showPopover = this.showPopover.bind(this);
		this.state = {
			popoverOpen: false
		};
	}

	showPopover() {
		this.setState({ popoverOpen: !this.state.popoverOpen });
	}

	render() {
		return (
			<Jumbotron className="datatable">
				<Table striped>
					<thead>
						<tr>
							{this.props.titles.map(title =>
								<th key={title}>{title}</th>)}
						</tr>
					</thead>
					<tbody>																		
						{this.props.data.map( (datarow, i) => 
								<ObjectRow titles={this.props.titles} row={datarow} key={i} /> )}
					</tbody>
				</Table>
			</Jumbotron>
			);
	}
}
