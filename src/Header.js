import React, { Component } from 'react';
import './App.css';
import logoMyplanet from './oglogo.png';
import logoManati from './logo_white.png';

export default class Header extends Component {

    render() {
        return (
        <div class="header">
            <div class="innerHeader">
            <div class="branded">
                <div class="logo">
                <img src={logoManati} />
                </div>
                <div class="brandedlogo">
                <img src={logoMyplanet} />
                </div>
            </div>
            <div class="classInfo flex jus-center align-center direction-col">
                <h4 class="text-white"> {this.props.title} </h4>
                <h1 class="ex-lrg-text text-highlight"> {this.props.year} </h1>
            </div>
            </div>
        </div>
        )
    }
}
