/** @format */

import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import VisitModal from "./VisitModal";

import * as actions from "../../actions/visitsActions";

class VisitForm extends React.Component {
	constructor(props) {
		super(props);

		this.openVisitsModal = this.openVisitsModal.bind(this);
		this.add = this.add.bind(this);
	}

	openVisitsModal() {
		// console.log(this.refs);
		this.refs.modalRef.openModal();
	}

	add(observation, reaction = "love") {
		this.props.dispatch(
			actions.addVisit(this.props.place, observation, reaction),
		);
	}

	render() {
		return (
			<div>
				<VisitModal
					place={this.props.place}
					onSubmit={this.add}
					ref='modalRef'
				/>
				<Button
					label='Valorar tu visita al negocio'
					secondary={true}
					onClick={this.openVisitsModal}
				/>
				<div className='row'></div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {};
}

export default connect(mapStateToProps)(VisitForm);
