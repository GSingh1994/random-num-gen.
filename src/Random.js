import React, { Component } from 'react';

class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
        this.randomNum = this.randomNum.bind(this);
    }
    randomNum(e) {
        this.setState({ num: Math.floor(Math.random() * 10) + 1 })
    }
    render() {
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                <div onClick={this.randomNum}>{this.state.num === 7 ? <h2>Winner</h2> : <button>Random number</button>}</div>
            </div >
        );
    }
}

export default Random;