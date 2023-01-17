import React, { useEffect , useState } from 'react'

import "./style.css";
const UseEffect = () => {
const intialData =0;
const [myNumber ,setMyNumber] = useState(intialData);
useEffect(() => {
 document.title=`Chats(${myNumber})`
});

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
      </div>
    </>
  )
}

export default UseEffect