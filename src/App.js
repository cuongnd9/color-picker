import React, { Component } from 'react';
import './App.css';
import Color from './components/Color';
import RGB from './components/RGB';
import HEX from './components/HEX';
import ColorSelected from './components/ColorSelected';
import UnitColor from './components/UnitColor';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#21c65e'
        };
        this.getColor = this.getColor.bind(this);
        this.getHex = this.getHex.bind(this);
        this.getRgb = this.getRgb.bind(this);
        this.showColor = this.showColor.bind(this);
    }

    getColor(color) {
        this.setState({
            color: color
        });
    }

    getHex(hex) {
        this.setState({
            color: hex
        });
    }

    getRgb(rgb) {
        this.setState({
            color: this.convertToHex(rgb)
        });
    }

    convertToRgb(hex) {
        hex = hex.replace('#','');
        var r = parseInt(hex.substring(0,2), 16);
        var g = parseInt(hex.substring(2,4), 16);
        var b = parseInt(hex.substring(4,6), 16);
        return 'rgb('+r+','+g+','+b+')';
    }

    convertToHex(rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }

    convertToHSV(rgb) {
        rgb = rgb.split('(')[1].split(')')[0];
        var r = rgb.split(',')[0];
        var g = rgb.split(',')[1];
        var b = rgb.split(',')[2];
        r /= 255;
        g /= 255;
        b /= 255;

        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;

        var d = max - min;
        s = max === 0 ? 0 : d / max;

        if (max === min) {
            h = 0;
        } else {
            switch (max) {
                case r: 
                    h = (g - b) / d + (g < b ? 6 : 0); 
                    break;
                case g: 
                    h = (b - r) / d + 2; 
                    break;
                case b: 
                    h = (r - g) / d + 4; 
                    break;
                default:
                    break;
            }

            h /= 6;
        }
        return 'hsv(' + Math.round(h * 360) + '°, ' + Math.round(s * 100) + '%, ' + Math.round(v * 100) + '%)';
    }

    convertToHSL(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        var r = parseInt(result[1], 16);
        var g = parseInt(result[2], 16);
        var b = parseInt(result[3], 16);

        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max === min){
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {
                case r: 
                    h = (g - b) / d + (g < b ? 6 : 0); 
                    break;
                case g: 
                    h = (b - r) / d + 2; 
                    break;
                case b: 
                    h = (r - g) / d + 4; 
                    break;
                default:
                    break;
            }
            h /= 6;
        }
        s = s*100;
        s = Math.round(s);
        l = l*100;
        l = Math.round(l);
        h = Math.round(360*h);
        return 'hsl(' + h + '°, ' + s + '%, ' + l + '%)';
    }

    convertToCMYK(rgb) {
        rgb = rgb.split('(')[1].split(')')[0];
        var r = rgb.split(',')[0];
        var g = rgb.split(',')[1];
        var b = rgb.split(',')[2];
        var computedC = 0;
        var computedM = 0;
        var computedY = 0;
        var computedK = 0;

        r = parseInt( (''+r).replace(/\s/g,''),10 ); 
        g = parseInt( (''+g).replace(/\s/g,''),10 ); 
        b = parseInt( (''+b).replace(/\s/g,''),10 ); 

        if ( r==null || g==null || b==null || isNaN(r) || isNaN(g)|| isNaN(b) )
        {
            alert ('Please enter numeric RGB values!');
            return;
        }
        if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
            alert ('RGB values must be in the range 0 to 255.');
            return;
        }
        // BLACK
        if (r === 0 && g === 0 && b === 0) {
            computedK = 1;
            return 'cmyk(0%, 0%, 0%, 100%)';
        }

        computedC = 1 - (r/255);
        computedM = 1 - (g/255);
        computedY = 1 - (b/255);

        var minCMY = Math.min(computedC, Math.min(computedM, computedY));
        computedC = (computedC - minCMY) / (1 - minCMY) ;
        computedM = (computedM - minCMY) / (1 - minCMY) ;
        computedY = (computedY - minCMY) / (1 - minCMY) ;
        computedK = minCMY;

        return 'cmyk(' + Math.round(computedC * 100) + '%, ' +Math.round(computedM * 100) + '%, ' + Math.round(computedY * 100) + '%, ' + Math.round(computedK * 100) + '%)';
    }

    showColor(unitName) {
        var rgb = this.convertToRgb(this.state.color);
        switch (unitName) {
            case 'HEX':
                return this.state.color;
            case 'RGB':
                return this.convertToRgb(this.state.color);
            case 'HSV':
                return this.convertToHSV(rgb);
            case 'HSL':
                return this.convertToHSL(this.state.color);
            case 'CMYK':
                return this.convertToCMYK(rgb);
            default:
                break;
        }
    }

    render() {
        const units = ['HEX', 'RGB', 'HSV', 'HSL', 'CMYK'];

        var unitElements = units.map((unit, index) => <UnitColor key={index} unitName={unit} color={this.showColor(unit)}/>);

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h3 className="panel-title">Color Picker</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <form>
                                        <HEX color={this.state.color} getHex={this.getHex}/>
                                        <RGB color={this.convertToRgb(this.state.color)} getRgb={this.getRgb}/>
                                        <Color color={this.state.color} getColor={this.getColor} /> 
                                    </form>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <ColorSelected color={this.state.color}/>
                                    {unitElements}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
