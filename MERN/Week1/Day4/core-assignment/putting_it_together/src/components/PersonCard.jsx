import React, { Component } from 'react'

export default class PersonCard extends Component{
    constructor(props) {
        super(props)
        // console.log(this.props)
        const {first_name, last_name, age, hairColor} = props;
        this.state = {
            first_name:first_name,
            last_name:last_name,
            age: age,
            hairColor:hairColor
        }
    }
    add(){
        this.setState({
        
            age : this.state.age + 1 
            
        })

    }
    render() {
        return (
            <div> 
                {}
                <div>
                    {/* <legend type='hidden'>Person.jsx</legend> */}
                    <center>
                        <h3> {this.state.first_name}  {this.state.last_name}</h3>
                        <p> Age: {this.state.age}</p>
                        <p> Hair Color: {this.state.hairColor} </p>
                        <button onClick={()=>{this.add()}} >Birthday Button for {this.state.first_name}  {this.state.last_name}</button>
                    </center>
                </div>
            </div>
        )
    }
}