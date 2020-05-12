import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           agecount: props.age
        }
    }

    handleclick = () =>
    {
        this.setState
        ({
            agecount: this.state.agecount + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName} </h1>
                <p> Age: {this.state.agecount} </p>
                <p> Hair Color: {this.props.hairColor} </p>
                <button onClick={this.handleclick}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>

            </div>
        )
    }
}

export default PersonCard