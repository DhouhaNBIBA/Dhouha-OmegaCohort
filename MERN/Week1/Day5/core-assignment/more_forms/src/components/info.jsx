import React, { useState } from  'react';
    
    
const Info = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");
    const [password, setPassword] = useState("");
    const [pError, setpError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [cpError, setcpError] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password,confirmPassword  };
        console.log("Welcome", newUser);

    };
    // const firstMessage = () => {
    //     if( firstName.length <3 ) {
    //     return "First name  must be at least 2 characters!";
    // }
    // };
    const firstMessage = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 3) {
            setfirstNameError("First name  must be at least 2 characters!!");
        } else {
            setfirstNameError("");
        }
    };

    const lastMessage = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 3) {
            setlastNameError("First name  must be at least 2 characters!!");
        } else {
            setlastNameError("");
        }
    };
    // const lastMessage = () => {
    //     if( lastName.length <3 ) {
    //     return "Last name  must be at least 2 characters!";
    // }
    const emailMessage = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 3) {
            setemailError("Email name  must be at least 5 characters!!");
        } else {
            setemailError("");
        }
    };
    // const emailMessage = () => {
    //     if( email.length <5 ) {
    //     return "Email must be at least 5 characters!";
    // }
    // };
    const pMessage = (e) =>{
        setPassword(e.target.value)
        if( password.length <9 ) {
            setpError("Password must be at least 8 characters!");
            }
        else {
            setpError("");
            }
    };
    const pCMessage = (e) =>{ setConfirmPassword(e.target.value)  
        if( password !== confirmPassword ) {
            setcpError ("The passwords must match!");
            }
        else {
            setcpError("");
            }
        };
    

    
    return(
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={firstMessage } value={ firstName} />
            </div>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            {/* <h6> { firstMessage ()} </h6> */}
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ lastMessage }  value={ lastName }/>
            </div>
                {
                    lastNameError ?
                    <p style={{color:'pink'}}>{ lastNameError }</p> :
                    ''
                }
            <div>
                <label>Email Address: </label> 
                <input type="email" onChange={ emailMessage }  value={ email }/>
            </div>
            {
                    emailError ?
                    <p style={{color:'pink'}}>{ emailError }</p> :
                    ''
                }
            <div>
                <label>Password: </label>
                <input type="password" onChange={ pMessage }  value={ password }/>
            </div>
            {
                    pError ?
                    <p style={{color:'pink'}}>{ pError }</p> 
                    : ''
                }
            {
                    cpError ?
                    <p style={{color:'pink'}}>{ cpError }</p> 
                    : ''
                }
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ pCMessage}  value={ confirmPassword } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    </div>
    );
};
    
export default Info;
