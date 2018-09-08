import React, { Component } from 'react';

class HEX extends Component {
	render() {
		return (
			<div className="form-group">
				<label>HEX</label>
				<input type="text" className="form-control" defaultValue={this.props.color}/>
			</div>
		);
	}
}

export default HEX;