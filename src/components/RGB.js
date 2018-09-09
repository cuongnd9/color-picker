import React, { Component } from 'react';

class RGB extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.getRgb(event.target.value);
	}

	render() {
		return (
			<div className="form-group">
				<label>RGB</label>
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

export default RGB;