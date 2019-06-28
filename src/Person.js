import React, { Component } from 'react';
import './App.css';

export default class Person extends Component {


    render() {
        return (
            <div>
                <div class="card">
                    <div class="profilePic" style={{backgroundImage: "url("+this.props.image+")"}}> </div>
                    <div class="cardBio">
                    <div class="name"> <h2 class="text-weight-bold">{this.props.name}</h2> </div>
                    <div class="degree text-small text-upper text-weight-light">{this.props.band}</div>
                    <div class="quote"> {this.props.biography} </div>
                    </div>
                </div>
            </div>
        )
    }
}
