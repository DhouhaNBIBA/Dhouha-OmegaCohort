import React, { Component } from 'react'

const PersonCard = props=>{
        return (
            <div> 
                {}
                <div>
                    {/* <legend type='hidden'>Person.jsx</legend> */}
                    <center>
                        <h3> {props.first_name}  {props.last_name}</h3>
                        <p> Age: {props.age}</p>
                        <p> Hair Color: {props.hairColor} </p>
    
                    </center>
                </div>
            </div>
        )
    }
export default PersonCard;