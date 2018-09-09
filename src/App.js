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
            color: '#000000'
        };
        this.getColor = this.getColor.bind(this);
        this.getHex = this.getHex.bind(this);
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

    convertToRgb(hex) {
        hex = hex.replace('#','');
        var r = parseInt(hex.substring(0,2), 16);
        var g = parseInt(hex.substring(2,4), 16);
        var b = parseInt(hex.substring(4,6), 16);
        return 'rgb('+r+','+g+','+b+')';
    }

    showColor(unitName) {
        switch (unitName) {
            case 'HEX':
                return this.state.color;
                break;
            case 'RGB':
                return this.convertToRgb(this.state.color);
                break;
        }
    }

    render() {
        const units = ['HEX', 'RGB', 'HSV', 'HLS', 'CMYK'];

        var unitElements = units.map((unit, index) => <UnitColor key={index} unitName={unit} color={this.showColor(unit)}/>);

        return (
            <div className="container-fluid">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand">Color Picker</a>
                        </div>
                
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a>Home</a></li>
                                <li><a>Donate</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a>About</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
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
                                        <RGB color={this.state.color}/>
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
