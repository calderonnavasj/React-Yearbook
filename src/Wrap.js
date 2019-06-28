import React, { Component } from 'react'

import './App.css';

export default class Wrap extends Component {
    render() {
        return (
            <body>
                <div class="wrap">
                <div class="cardWrap">
                    {this.props.children}
                </div>
            </div>
            </body>
        )
    }
}
