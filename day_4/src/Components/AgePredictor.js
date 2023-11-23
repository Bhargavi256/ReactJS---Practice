import { useEffect, useState } from "react";
import Axios from "axios";
function AgePredictor(){
    const[name,setname]=useState("");
    const[Predictage,setPredictage]=useState(null);
    const fetchData=()=>{
        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
            setPredictage(res.data);
        });
    };
    return(
        <div className="App">
        <input placeholder="Ex: Chikky..."
    onChange={(event)=>{setname(event.target.value);}}/>
        <button type="button" onClick={fetchData}>Predict Age</button>
        <h1>Predicted Name:{Predictage?.name} </h1>
        <h1>Predicted Age:{Predictage?.age} </h1>
        <h1>Predicted Count:{Predictage?.count} </h1>
        </div>
    );
}
export default AgePredictor;