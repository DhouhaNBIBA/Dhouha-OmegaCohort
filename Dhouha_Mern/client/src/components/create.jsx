import React from 'react'
import '../components/display.css'
import {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
const Create = (props) => {
    const [errors, setErrors] = useState([]);  
    const navigate= useNavigate()
    const [image, setImage] = useState('');
    const [imageError, setImageError] = useState("");
    const [chests, setChests] = useState(1);
    const [chestsError, setChestsError] = useState("");
    const [NameError, setNameError] = useState("");
    const [name, setName] = useState('');
    const [phrase, setPhrase] = useState('');
    const [phraseError, setPhraseError] = useState("");
    const [position, setPosition] = useState('');
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    // const [pegLegError, setReviewError] = useState(""); 
    const createPirate = (e)=>{
        e.preventDefault();
    const newPirate={
            name,
            image,
            chests,
            phrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        }
        axios.post("http://localhost:8000/api/pirates/new",newPirate)
            .then(res => {
                console.log("Sucsess");
                console.log(res.data);
                navigate("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })  
        }          

        
        const nameMessage = (e) => {
            setName(e.target.value);
            if(e.target.value.length < 3) {
                setNameError("Name  must be at least 2 characters!!");
                setName(e.target.value);
            } else {
                setNameError("");
            }
        };
    
        const imageMessage = (e) => {
            setImage(e.target.value);
            if(e.target.value.length < 3) {
                setImageError("Must be valid URL!!");
            } else {
                setImageError("");
            }
        };
        const chestsMessage = (e) => {
            setChests(e.target.value);
            if(e.target.value<1) {
                setChestsError("Number of chest must be positiv number!!");
            } else {
                setChestsError("");
            }
        };
        const phraseMessage = (e) => {
            setPhrase(e.target.value);
            if(e.target.value.length < 8) {
                setPhraseError("Catch phrase must be at least 10 characters!!");
            } else {
                setPhraseError("");
            }
        };
        const positionMessage = (e) => {
            setPosition(e.target.value);
        };
        const pegMessage = (e) => {
            setPegLeg(e.target.checked);
        };
        const eyeMessage = (e) => {
            setEyePatch(e.target.checked);
        };
        const hookMessage = (e) => {
            setHookHand(e.target.checked);
        };
        
    return (
    <div style={{backgroundColor:'#D27D2D'}}>
        <div  className='header' >
        <h2>Add Pirate</h2>
        <Link to={"/pirates"} ><button className="edit">Crew Board</button></Link>
        {/* style={{textDecoration: 'none', color:'black' } */}
        </div>
        <form   onSubmit={createPirate} className="div2">
                {
                    NameError ?
                    <p style={{color:'pink'}}>{ NameError }</p> :
                    ''
                }
                {
                    imageError ?
                    <p style={{color:'pink'}}>{ imageError }</p> :
                    ''
                }
                {
                    phraseError ?
                    <p style={{color:'pink'}}>{ phraseError}</p> :
                    ''
                }
                {
                    chestsError ?
                    <p style={{color:'pink'}}>{ chestsError }</p> :
                    ''
                }
            {errors.map((err, index) => <p key={index} style={{color:"purple" ,fontSize: "1.6rem"}} >{err}</p>)}
            <div style={{textAlign: "left"}}>
                Pirate Name: <br/><input className="inp" onChange= {nameMessage}  value={name} /> <br/><br/>
                Image url: <br/><input className="inp" onChange={imageMessage} value={image}/> <br/><br/>
                # of Treasure Chests: <br/><input className="inp" onChange={chestsMessage} value={chests} /> <br/><br/>
                Pirate catch Phrase: <br/><input className="inp" onChange= {phraseMessage}  value={phrase} /> <br/><br/>
            </div>
            <div style={{textAlign: "left"}}>
                Crew Position: <br/>
                <select  onChange={positionMessage} value={position}>
                    <option name="no">Select position </option>
                    <option name="Captian"> Captian</option>
                    <option name="First Mate">First Mate</option>
                    <option name="Quarter Master">Quarter Master</option>
                    <option name="Boatswain">Boatswain</option>
                    <option name="Powder Monkey">Powder Monkey</option>
                </select><br/><br/>
                <div style={{textAlign: "left"}}>
                <input type="checkbox" onChange={pegMessage}  checked={pegLeg}/>&nbsp;&nbsp; Peg Leg<br/><br/>
                <input type="checkbox" onChange={eyeMessage}  checked={eyePatch}/>&nbsp;&nbsp;Eye Patched<br/><br/>
                <input type="checkbox" onChange={hookMessage}  checked={hookHand}/>&nbsp;&nbsp;Hook Hand<br/><br/>
                </div>
                <br/><button className="edit">Add pirate</button> 
            </div>
        </form>
    </div>
    )
    }

export default Create


        