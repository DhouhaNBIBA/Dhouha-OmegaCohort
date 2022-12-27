import React from 'react'
import styles from '../components/create.module.css'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Update = (props) => {
    const navigate= useNavigate();
    const{id}= useParams();
    const [inputs, setInputs]= useState({title:"", content:"", isImportent :false});
    const [errors, setErrors] = useState([]); 
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/notes/${id}`)
        .then(res=> {
            console.log(res.data);
            setInputs(res.data)
        })
        .catch(err => console.log(err))
    },[id])
    const UpdateNote = (e)=>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/notes/update/"+id, { title: inputs.title,content: inputs.content,isImportent: inputs.isImportent})
            .then(res=> {
                navigate("/notes")
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
            <form  className={styles.form} onSubmit={UpdateNote}>
            {errors.map((err, index) => <p key={index} style={{color:"pink" ,fontSize: "1.6rem"}} >{err}</p>)}
                Title: <br/><input className={styles.inp} onChange={(e)=> setInputs({...inputs, title: e.target.value}) } value={inputs.title}/> <br/><br/>
                Content: <br/><input className={styles.inp} onChange={(e)=> setInputs({...inputs, content: e.target.value})} value={inputs.content} /> <br/><br/>
                Is it importent: <input type="checkbox" onChange={(e)=> setInputs({...inputs, isImportent: e.target.checked})}  checked={inputs.isImportent}/>
                <br/><button className={styles.edit}>Submit</button>
            </form>
        </div>
    )
}

export default Update