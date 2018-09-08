import React, { Component } from 'react';

class RGB extends Component {
	convertToRgb(color) {
		
	}
	render() {
		return (
			<div className="form-group">
				<label>RGB</label>
				<input type="text" className="form-control" value={this.convertToRgb}/>
			</div>
		);
	}
}

export default RGB;