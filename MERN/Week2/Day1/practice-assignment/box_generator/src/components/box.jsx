import React from 'react'
import { useState } from 'react'

const BoxColor = (props) => {
    const[color, setColor]=useState('');
    const[width,setWidth]=useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        props.getValues(color, width);
        setColor('');
        setWidth('');
    }
    return (
    <div>
        <form onSubmit={submitHandler }>
            Color: <input type="text" value={color} onChange={(e) =>
            {setColor(e.target.value)}
            }/>
            width: <input type="number" value={width} onChange={(e) =>
            {setWidth(e.target.value)}
            }/>
            <input type="submit" value="Add" />
        </form> 

    </div>
    )
}

export default BoxColor