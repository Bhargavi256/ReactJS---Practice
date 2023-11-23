import { useState } from "react";
import Axios from "axios";
function Excuse(){
    const[generatedExcuse,setGeneratedExcuse]=useState("");
    const fetchExcuse=(exc)=>{
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${exc}/`).then((res)=>{
            setGeneratedExcuse(res.data[0].excuse);
        })
    }
    return(
        <div>
            <button onClick={()=>fetchExcuse("party")}>Party</button>
            <button onClick={()=>fetchExcuse("office")}>Office</button>
            <button onClick={()=>fetchExcuse("college")}>College</button>
            <p>{generatedExcuse}</p>
        </div>
    );
}
export default Excuse;