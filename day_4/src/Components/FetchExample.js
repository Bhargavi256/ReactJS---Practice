import { useEffect, useState } from "react";
import Axios from "axios";
export const FetchExample = ()=>{

    // fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{console.log(data);});
    const[factData,setfactData]=useState("");
    const fetchfunc = ()=>{
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setfactData(res.data.fact);
        });
    }
    
    useEffect(()=>{
        fetchfunc();
    },[]);
    
    return(
        <div>
            <button type="button" onClick={fetchfunc}>Generate new one</button>
            <p>{factData}</p>
        </div>
    );
}