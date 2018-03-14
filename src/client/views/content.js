import React from 'react';
import { Jumbotron } from 'reactstrap';

export class Content extends React.Component {
	render() {
		return (			
	          <Jumbotron className="App-content">
	        	{this.props.infoText}
	          </Jumbotron>	        
			);
	}
}