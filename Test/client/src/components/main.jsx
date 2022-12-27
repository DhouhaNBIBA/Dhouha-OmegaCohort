import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../components/main.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { format} from 'date-fns';


const Main = (props) => {
    const navigate = useNavigate();
    const [notes, setNotes]= useState([]);
    
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/notes")
        .then(res => {
            console.log(res.data);
            setNotes(res.data)
        })
        .catch(err=> console.log("XXXXX", err))
    }, [])
    const goToUpdate=(noteID)=>{
        navigate("/notes/update/" +noteID)
    }
    const deleteNote= (noteID)=>{
        axios.delete("http://localhost:8000/api/notes/delete/"+noteID)
            .then(res=> {
                console.log((res.data));
                console.log("Deleted with success!!");
                setNotes(notes.filter((notes)=>notes._id  !==noteID))
            })
            .catch( err => console.log(err))
    }
    return (
        <div> 
            {/* {JSON.stringify(notes)} */}
            {notes.map((note) => {
                const date=note.createdAt;
                // const sort = date.sort(compareAsc)
                return(
                    <div className={styles.note} key={note._id} >
                        <Link to={`/notes/${note._id}`} style={{textDecoration: 'none', color:'black' }}>
                            <div>
                                <h3 >{ note.isImportent? "❣  " :""}{note.title}</h3>
                                <p className={styles.test}>{note.content}</p>
                            </div>
                            <p>{format (new Date(date),"yyyy-MM-dd 'At' HH:mm:ss")}</p>
                        </Link>
                        <button className={styles.edit} onClick={()=> goToUpdate(note._id)}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;
                        <button className={styles.delete} onClick={()=> deleteNote(note._id)}>Delete</button>
                    </div>
                )
            }
            )}

        </div>
    )
}

export default Main