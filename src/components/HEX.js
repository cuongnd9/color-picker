import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class HEX extends Component {
	constructor(props) {
		super(props);
		this.state = {
            color: ''
        };
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
		this.setState({
			color: this.props.color
		});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			color: nextProps.color
		});
	}

	handleChange(event) {
		var value = event.target.value;
		this.setState({
			color: value
		});
		if (this.checkColor(value)) {
			this.props.getHex(value);
		}
	}

	checkColor(color) {
		if (color.length ===7 && color.indexOf('#') === 0) {
			var result = 0;
			color = color.split('#')[1].split('');
			color.forEach( function(element) {
		    if (isNaN(parseInt(element, 16))) result++;
		    });
		    return result === 0;
		}
		return false;
	}

	render() {
		return (
			<div className="form-group">
				<label>HEX</label>
				<input
					type="text"
					className="form-control"
					value={this.state.color}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		color: state.color
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		getHex: color => {
			dispatch(actions.getHex(color));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HEX);
