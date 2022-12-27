import React from 'react';
import  styles  from "../components/create.module.css";
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Product from '../../../server/models/products.models';


const AddProduct = (props) => {
        const [errors, setErrors] = useState([]); 
        const navigate= useNavigate()
        const [inputs, setInputs]= useState({title:"", price:0 , discription :""});
        const AddProduct = (e)=>{
            e.preventDefault();
            const newProduct={
                title: inputs.title,
                price: inputs.price,
                discription: inputs.discription}
    
            axios.post("http://localhost:8000/api/",newProduct)
                .then(res => {
                    console.log("Sucsess");
                    console.log(res.data);
                    // navigate("/Products")
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
                <form  className={styles.form} onSubmit={AddProduct}>
                {errors.map((err, index) => <p key={index} style={{color:"pink" ,fontSize: "1.6rem"}} >{err}</p>)}
                    Title: <br/><input className={styles.inp} onChange={(e)=> setInputs({...inputs, title: e.target.value}) } value={inputs.title}/> <br/><br/>
                    Price: <br/><input type="number" className={styles.inp} onChange={(e)=> setInputs({...inputs, price: e.target.value})} value={inputs.price} /> <br/><br/>
                    Discrition: <input onChange={(e)=> setInputs({...inputs, discription: e.target.value})}  value={inputs.discription}/>
                    <br/><button className={styles.edit}>Submit</button>
                </form>
                <hr/> <hr/>
                <div>
                {Product.map((prod) => {
                const date=Product.createdAt;
                // const sort = date.sort(compareAsc)
                return(
                    <div className={styles.note} key={note._id} >
                        {/* <Link to={`/notes/${prod._id}`} style={{textDecoration: 'none', color:'black' }}> */}
                            <div>
                                <h3 >{prod.title}</h3>
                                {/* <p className={styles.test}>{note.content}</p> */}
                            </div>
                            <p>{format (new Date(date),"yyyy-MM-dd 'At' HH:mm:ss")}</p>
                        {/* </Link> */}
                </div>
                )
                },
    
            </div>
        )
        </div>
    }}

export default AddProduct