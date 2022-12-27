import { format } from 'date-fns/esm'
import React from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const AuthorList = ({authors, deleteAuthor}) => {
    //(props)=> props.authors 
    // const {authors}= props
    // const [author, setAuthors]= useState([]);
    // const navigate = useNavigate();
    
    // const deleteAuthor= (noteID)=>{
    //     axios.delete("http://localhost:8000/api/authors/"+noteID)
    //         .then(res=> {
    //             console.log((res.data));
    //             console.log("Deleted with success!!");
    //             setAuthors(author.filter((authors)=>authors._id  !==noteID))
    //             navigate("/")
    //         })
    //         .catch( err => console.log(err))
            
    // }
    
    return <>
        <table>
            <thead>
                <tr>
                    <th>Authors</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {authors.map(author =>{
                    const date=author.createdAt;
                    return <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                            <Link to={`update/${author._id}`}> Update</Link>
                            <Link to={`details/${author._id}`}>Details</Link>
                            <h5>Added on:{format (new Date(date),"yyyy-MM-dd 'At' HH:mm:ss")}</h5>
                            <button onClick={()=> {
                                deleteAuthor(author._id)}}>Delete</button>                            
                        </td>

                    </tr>})}
            </tbody>
        </table>
    
    </>
    }

export default AuthorList