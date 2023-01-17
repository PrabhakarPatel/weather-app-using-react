import React,{useReducer} from 'react'
import "./style.css";

const reducer =(state,action)=>{
    if(action.type==="Increment"){
        state=state+1;
    }
    if(state>0 && action.type==="Decrement"){
        state=state-1;
    }
    return state;
}

const Usereducer= () => {
const intialData =10;

const [state ,dispatch] = useReducer(reducer,intialData);
// dispatch is used to trigger reducer function 
  return (
    <>
      <div className='center_div'>
        <p>{state}</p>
        <div class='button2'onClick={()=>dispatch({type:"Increment"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>
        <div class='button2'onClick={()=>dispatch({type:"Decrement"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Decrement
        </div>
      </div>
    </>
  )
}

export default Usereducer
