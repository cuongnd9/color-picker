import React, { Component } from 'react';
import {connect} from 'react-redux';

class ColorSelected extends Component {
	render() {
		return (
			<div className="row">
			    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			        <div style={{background:this.props.color,padding:'50px'}}></div>
			        <hr/>
			    </div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		color: state.color
	};
};

export default connect(mapStateToProps, null)(ColorSelected);
