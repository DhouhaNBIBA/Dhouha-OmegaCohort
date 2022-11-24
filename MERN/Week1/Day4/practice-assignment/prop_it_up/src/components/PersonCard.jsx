import React, { Component } from 'react'

export default class PersonCard extends Component{
    constructor(props) {
        super(props)
        // console.log(this.props)
        this.state = {
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            age: this.props.age,
            hairColor: this.props.hairColor,
        }
    }
    render() {
        return (
            <fieldset>
                <legend>PersonCard.jsx</legend>
                <div>
                    {/* {this.state.person.name} */}
                </div>
            </fieldset>
        )
    }
}