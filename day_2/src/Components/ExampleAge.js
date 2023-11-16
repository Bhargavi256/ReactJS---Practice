import { useState } from "react"

const ExampleAge  = () =>{
    const[inputValue,setinputValue] = useState("");

    const InputValueChange = (event) =>{
        setinputValue(event.target.value);
    }
     return(
        
        <div>
            <input type="text" onChange={InputValueChange}/>
            {inputValue}
        </div>
     );
}
export default ExampleAge;