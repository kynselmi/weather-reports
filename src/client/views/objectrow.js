import React from 'react';
import { Button, Col, Label, Form, FormGroup, Input, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

export class ObjectRow extends React.Component {
	constructor(props) {
		super(props);

		this.toggleEditModal = this.toggleEditModal.bind(this);
		this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
		this.state = {
			editOpen: false,
			deleteOpen : false
		};


	}

	toggleEditModal() {
		this.setState({ editOpen: !this.state.editOpen });
	}

	toggleDeleteModal() {
		this.setState( { deleteOpen : !this.state.deleteOpen });
	}


	render() {
		let columns = this.props.row.map ( (key, i) =>
						<td key={i}>{key}</td>);
		columns.push(<td key={columns.length}>									
									<Button className="float-right" color="danger" onClick={this.toggleDeleteModal}>Delete</Button>
									<Button className="float-right" color="primary" onClick={this.toggleEditModal}>Edit</Button>
								</td>);
		columns.push(<td key={columns.length}></td>)		
		columns.push(
					<Modal key={columns.length} isOpen={this.state.editOpen}>
					<ModalHeader toggle={this.toggleEditModal}>{this.props.row[1]}</ModalHeader>
					<ModalBody>
						<Form>							
							{this.props.titles.map( (title, i) => 
								<FormGroup row key={i}> 
								<Label for={title} sm={3}>{title}</Label>
								<Col sm={9}>
									<Input type="textarea" name={"textarea"+i} placeholder={this.props.row[i]} />
								</Col>
								</FormGroup>
								)}
						</Form>
						<ModalFooter>
							<Button color="success" onClick={this.toggleEditModal} key={this.props.titles.length}>Save</Button>						
						</ModalFooter>
					</ModalBody>
					</Modal> 
					)
		columns.push(					
					<Modal key={columns.length+1} isOpen={this.state.deleteOpen}>
						<ModalHeader toggle={this.toggleDeleteModal}>Are you sure?</ModalHeader>
						<ModalBody>Confirm that you want to delete {this.props.row[1]} permanently by pressing the 'Delete' button
							<ModalFooter>
								<Button color="danger" onClick={this.toggleDeleteModal} key={this.props.titles.length+1}>Delete</Button>
							</ModalFooter>
						</ModalBody>
					</Modal>
			)
					
		return (
				<tr>{columns}</tr>
		);
	}
}
