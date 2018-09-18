import React, { Component } from 'react';

class RGB extends Component {
	constructor(props) {
		super(props);
		this.state = {
            color: ''
        };
		this.handleChange = this.handleChange.bind(this);
		this.convertToRgb = this.convertToRgb.bind(this);
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
		value =this.convertToHex(value);
		console.log(value);
		if (this.checkColor(value)) {
			this.props.getHex(value);
		} 
	}

	convertToRgb(hex) {
        if (hex.length !== 7) return;
        hex = hex.replace('#','');
        var r = parseInt(hex.substring(0,2), 16);
        var g = parseInt(hex.substring(2,4), 16);
        var b = parseInt(hex.substring(4,6), 16);
        return 'rgb('+r+','+g+','+b+')';
    }

    convertToHex(rgb) {
        if (rgb === undefined) return;
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
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
		var color = this.convertToRgb(this.state.color);
		return (
			<div className="form-group">
				<label>RGB</label>
				<input 
					type="text" 
					className="form-control" 
					value={color}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default RGB;