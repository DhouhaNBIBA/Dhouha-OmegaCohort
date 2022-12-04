import React from 'react'

const DisplayBox = (props) => {
    console.log(props.x);
  return (
    <div style={{
        display: 'flex',
        margin:'10px'
    }}>
      { props.boxes.map((box, index) => {
        return <div key={index} style={{
            backgroundColor: box.color,
            width: `${box.width}px`,
            height: `${box.width}px`,
            margin:'10px'
    }}>
        </div>
      }) }
    </div>
  )
}
export default DisplayBox
