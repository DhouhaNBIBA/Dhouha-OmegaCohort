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
            <div> 
                {}
                <div>
                    {/* <legend type='hidden'>Person.jsx</legend> */}
                    <center>
                        <h3> {this.props.person1.first_name} , {this.props.person1.last_name}</h3>
                        <p> {this.props.person1.age}</p>
                        <p>  {this.props.person1.hairColor} </p>
                    </center>
                </div>
                <div>
                    {/* <legend>Person.jsx</legend> */}
                        <h3> {this.props.person2.first_name} , {this.props.person2.last_name}</h3>
                        <p> {this.props.person2.age}</p>
                        <p>{this.props.person2.hairColor} </p>
                    
                </div>
                <div>
                    {/* <legend>Person.jsx</legend> */}
                        <h3>{this.props.person3.first_name} , {this.props.person3.last_name}</h3>
                        <p>{this.props.person3.age}</p>
                        <p>{this.props.person3.hairColor} </p>
                </div>
                <div>
                    {/* <legend>Person.jsx</legend> */}
                        <h3>{this.props.person4.first_name} , {this.props.person4.last_name}</h3>
                        <p> {this.props.person4.age}</p>
                        <p> {this.props.person4.hairColor} </p>
                </div>
            </div>
        )
    }
}