import React, {useEffect, useState} from 'react';
import { useParams, Link  } from 'react-router-dom';
import axios from 'axios';
// import { format} from 'date-fns';

const Details = (props) => {
        const{ id } = useParams();
        const[author, setAuthor]= useState(null);
        const[bookData, setBookData]= useState({title:"", numberOfPages:0});
        const [isLoading, setIsloading]= useState(true);
        const [refresh, setRefresh] = useState(true);
        const [errors, setErrors] = useState([]); 
        useEffect(()=>{
            axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=> {
                console.log(res.data);
                setAuthor(res.data);
                setIsloading(false)
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
        },[id])
        //Get Data from inputs
        const changeHandler = (e) => {
            setBookData({...bookData,[e.target.name]: e.target.value,});
            };
          // CREATE NEW BOOK
    const submitHandler = (e) => {
    e.preventDefault();
    axios
        .put(`http://localhost:8000/api/authors/book/`+id, bookData)
        .then((res) => {
        setRefresh(!refresh);
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
  };



        if (isLoading){
            return <h2>Loding......</h2>
        }
    return (
        <div>
            <Link to="/">Home</Link>
            <h2>{author.name}</h2>
            <h2>Author Books</h2>
            {author.books.map(book =>{
                // const date=book.UpdatedAt;
                return <div key={book?._id}>
                    <h4>Book name: {book?.title}</h4>
                    <h4>Number of pages :{book?.numberOfPages} </h4>
                    {/* <h5>Added on:{format (new Date(date),"yyyy-MM-dd 'At' HH:mm:ss")}</h5> */}
                    </div>
            })}
            <h2>Add New Book</h2>
            <form onSubmit={submitHandler}>
            {errors.map((err, index) => <p key={index} style={{color:"pink" ,fontSize: "1.6rem"}} >{err}</p>)}
        <div>
            Title:<input type="text" name="title" onChange={changeHandler} value={bookData.title}/>
        </div>
        <div>
            Number of pages: <input type="number" name="numberOfPages" onChange={changeHandler} value={bookData.numberOfPages}/>
        </div>
        <input type="submit" value="Add" />
        </form>   
            
            
            
            </div>

    )
}

export default Details