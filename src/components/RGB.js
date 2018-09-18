import React, { Component } from 'react';

class RGB extends Component {
	constructor(props) {
		super(props);
		this.state = {
            color: '#ff5959'
        };
		this.handleChange = this.handleChange.bind(this);
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

	convertToRgb(hex) {
        if (hex.length !== 7) return;
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
					value={this.convertToRgb(this.state.color)}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default RGB;