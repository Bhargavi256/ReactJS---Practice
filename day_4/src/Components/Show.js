import { useState } from "react";
import { Task } from "./Task";

export const Show =()=>{
    const[showText,setshowText]=useState(false);
    const TextFunc =()=>{
        setshowText(!showText);
    }
     
     return(
        <div className="App"> 
<button type="button" onClick={TextFunc}>Show</button>
        
        {showText && <Task/>}
        </div>
        );
        
     
}