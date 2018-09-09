import React, { Component } from 'react';

class UnitColor extends Component {
	render() {
		return(
			<div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <span className="label label-success">{this.props.unitName}</span>
                    <div style={{textAlign:'right',float:'right'}}>{this.props.color}</div>
                    <hr/>
                </div>
            </div>
		); 
	}
}

export default UnitColor;