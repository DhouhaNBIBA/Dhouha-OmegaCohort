import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../components/main.module.css';
import { useParams } from 'react-router-dom';

const One = (props) => {
    const{ id } = useParams()
    const[oneNote, setOneNote]= useState(null)
    console.log(id);
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/notes/${id}`)
        .then(res=> {
            console.log(res.data);
            setOneNote(res.data)
        })
        .catch(err => console.log(err))
    },[id])
    return (
        <div>
            {oneNote?< div className={styles.note}>
            Title : {oneNote.title}<br /><br />
            {oneNote.content}<br />
            <hr />
            <p>{oneNote.createdAt}</p>
        </div> : "🚨🚨🚨"
}
        </div>
    )
}

export default One