import { useState } from "react";
const ExampleText =() =>{
    const[showText,setshowText] = useState(true);

    return(
        <div>
             <button type="button" onClick={()=>{
setshowText(!showText)
             }}>Click here</button>
            {showText && <h1>My name is Bhargavi</h1>}
        </div>
    );
}

export default ExampleText;