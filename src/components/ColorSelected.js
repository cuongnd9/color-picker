import React, { Component } from 'react';

class ColorSelected extends Component {
	render() {
		return (
			<div className="row">
			    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			        <div style={{background:this.props.color,padding:'40px'}}></div>
			        <hr/>
			    </div>
			</div>
		);
	}
}

export default ColorSelected;

