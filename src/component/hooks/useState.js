import React from 'react'
import "./style.css";
const UseState = () => {
const intialData =0;
const [myNumber ,setMyNumber] = React.useState(intialData);

  return (
    <>
      <div className='center_div'>
        <p>{myNumber}</p>
        <div class='button2'onClick={()=>setMyNumber(myNumber+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>
        <div class='button2'onClick={()=>(myNumber>0?setMyNumber(myNumber-1):setMyNumber(0))}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            decrement
        </div>
      </div>
    </>
  )
}

export default UseState
