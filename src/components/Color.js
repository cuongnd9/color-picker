import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class Color extends Component {
	constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

	handleChange(event) {
		this.props.getColor(event.target.value);
	}

	render() {
		return (
			<div className="form-group">
				<label>Select Color</label>
				<input
					type="color"
					name="input-color"
					className="form-control"
					title="Color Picker"
					value={this.props.color}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		color: state.color
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		getColor: color => {
			dispatch(actions.getHex(color));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Color);
