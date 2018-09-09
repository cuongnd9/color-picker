import React, { Component } from 'react';

class HEX extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.getHex(event.target.value);
	}

	render() {
		return (
			<div className="form-group">
				<label>HEX</label>
				<input 
					type="text" 
					className="form-control" 
					value={this.props.color}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default HEX;