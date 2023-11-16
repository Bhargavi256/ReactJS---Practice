import { useState } from "react";
const ExampleText2 = () =>{
    const[textClr,settextClr]=useState("black")
    return(
        <div>
                <button type="button" onClick={()=>{
                settextClr(textClr==="red"?"black":"red");
                }}>Click here</button>
                <h1 style={{color:textClr}}>This is Bhargavi</h1>
        </div>
    );
}

export default ExampleText2;