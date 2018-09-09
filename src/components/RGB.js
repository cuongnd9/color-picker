import React, { Component } from 'react';

class RGB extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {

	}

	convertToRgb(hex) {
	    hex = hex.replace('#','');
	    var r = parseInt(hex.substring(0,2), 16);
	    var g = parseInt(hex.substring(2,4), 16);
	    var b = parseInt(hex.substring(4,6), 16);
	    return 'rgb('+r+','+g+','+b+')';
	}

	render() {
		return (
			<div className="form-group">
				<label>RGB</label>
				<input 
					type="text" 
					className="form-control" 
					value={this.convertToRgb(this.props.color)}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default RGB;