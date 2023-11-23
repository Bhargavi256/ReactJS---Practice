import { useState,useEffect } from "react";

export const Task = ()=>{
    const[Text,setText]=useState("");
    useEffect(()=>{
        console.log("Component Mounted");
        return ()=>{
            console.log("Component Unmounted");
        };
    },[]);
        return(
            <div>
           <input onChange={(event)=>{
            setText(event.target.value);
           }}/> 
           {<h1>{Text}</h1>}
           </div>
        );
    
}