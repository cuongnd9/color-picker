import React, { Component } from 'react';

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

export default Color;