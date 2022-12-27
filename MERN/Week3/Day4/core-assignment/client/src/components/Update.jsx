import React from 'react'
import styles from '../components/create.css'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Update = (props) => {
    const navigate= useNavigate();
    const{id}= useParams();
    const [inputs, setInputs]= useState({name:""});
    const [errors, setErrors] = useState([]); 
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=> {
            console.log(res.data);
            setInputs(res.data)
        })
        .catch(err => console.log(err))
    },[id])
    const UpdateAuthor = (e)=>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/update/"+id, { name: inputs.name})
            .then(res=> {
                navigate("/")
                console.log(res.data);
                // setInputs(res.data)
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
            <form  className={styles.form} onSubmit={UpdateAuthor}>
            {errors.map((err, index) => <p key={index} style={{color:"pink" ,fontSize: "1.6rem"}} >{err}</p>)}
                Name: <br/><input className={styles.inp} onChange={(e)=> setInputs({...inputs, name: e.target.value}) } value={inputs.name}/> <br/><br/>
                {/* Content: <br/><input className={styles.inp} onChange={(e)=> setInputs({...inputs, content: e.target.value})} value={inputs.content} /> <br/><br/>
                Is it importent: <input type="checkbox" onChange={(e)=> setInputs({...inputs, isImportent: e.target.checked})}  checked={inputs.isImportent}/> */}
                <br/><button className={styles.edit}>Submit</button>
            </form>
        </div>
    )
}

export default Update