import React from 'react'
import styles from '../components/create.css'
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Create = (props) => {
    const [errors, setErrors] = useState([]); 
    const navigate= useNavigate()
    const [inputs, setInputs]= useState({name:""});
    const createAuthor = (e)=>{
        e.preventDefault();
        const newAuthor={
            name: inputs.name,}

        axios.post("http://localhost:8000/api/authors",newAuthor)
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

    return (
        <div>
            {/* <div>{JSON.stringify(inputs)} </div> */}
            <form  className={styles.form} onSubmit={createAuthor}>
            {errors.map((err, index) => <p key={index} style={{color:"pink" ,fontSize: "1.6rem"}} >{err}</p>)}
                Name: <br/><input className={styles.inp} onChange={(e)=> setInputs({...inputs, name: e.target.value}) } value={inputs.name}/> <br/><br/>
                {/* Content: <br/><input className={styles.inp} onChange={(e)=> setInputs({...inputs, content: e.target.value})} value={inputs.content} /> <br/><br/>
                Is it importent: <input type="checkbox" onChange={(e)=> setInputs({...inputs, isImportent: e.target.checked})}  checked={inputs.isImportent}/> */}
                <br/><button className={styles.edit}>Create</button>
            </form>

        </div>
    )
}

export default Create