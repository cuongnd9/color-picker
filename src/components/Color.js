import React, { Component } from 'react';

class Color extends Component {
	constructor(props) {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

	onHandleChange(event) {
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
					onChange={this.onHandleChange}
				/>
			</div>
		);
	}
}

export default Color;