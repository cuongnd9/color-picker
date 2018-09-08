import React, { Component } from 'react';
import './App.css';
import Color from './components/Color';
import RGB from './components/RGB';
import HEX from './components/HEX';
import ColorSelected from './components/ColorSelected';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#000000'
        };
        this.getColor = this.getColor.bind(this);
    }

    getColor(color) {
        this.setState({
            color: color
        });
    }

    render() {
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
                                        <HEX color={this.state.color}/>
                                        <RGB color={this.state.color}/>
                                        <Color getColor={this.getColor} /> 
                                    </form>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ColorSelected/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <span className="label label-info">HEX</span>
                                            <div style={{textAlign:'right',float:'right'}}>#125478</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <span className="label label-warning">RGB</span>
                                            <div style={{textAlign:'right',float:'right'}}>#125478</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <span className="label label-success">HSV</span>
                                            <div style={{textAlign:'right',float:'right'}}>#125478</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <span className="label label-default">HLS</span>
                                            <div style={{textAlign:'right',float:'right'}}>#125478</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <span className="label label-danger">CMYK</span>
                                            <div style={{textAlign:'right',float:'right'}}>#125478</div>
                                        </div>
                                    </div>
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
