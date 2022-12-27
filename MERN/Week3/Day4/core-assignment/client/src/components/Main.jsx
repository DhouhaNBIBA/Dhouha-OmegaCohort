import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthorList  from "./AuthorList";
// import { useParams } from 'react-router-dom';

    const Main = (props) => {
        // const navigate = useNavigate();
        const[isLoading, setIsloading]= useState(true)
        const [authors, setAuthors] = useState([])
    //Get all Authers
        useEffect(()=>{
            axios.get("http://localhost:8000/api/authors/")
            .then(res => {
            console.log(res.data);
            setAuthors(res.data);
            setIsloading(false)
            })
            .catch(err => console.log("❌❌", err))
        }, [])
        const deleteAuthor= (noteID)=>{
            axios.delete("http://localhost:8000/api/authors/"+noteID)
                .then(res=> {
                    console.log((res.data));
                    console.log("Deleted with success!!");
                    setAuthors(authors.filter((authors)=>authors._id  !==noteID))
                })
                .catch( err => console.log(err))
                
        }
        
        if (isLoading)
            {return <h2>Loading....</h2>
        }
    return <>
    <h1>Favorite Authers</h1>
    <Link to="/create">Add New Author</Link>
    <p> we Have Quoates by:</p>
    <AuthorList authors={authors} deleteAuthor={deleteAuthor} />
    </>
}


export default Main