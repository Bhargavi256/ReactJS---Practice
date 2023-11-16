import { useState } from "react";
const Age =()=>{
    const[age,setAge]=useState(0);
  const increaseAge = ()=>{
    setAge(age+1);
  }
    return (
        <div>
            {age}
      <button type="button" onClick={increaseAge}>Increase Button</button>
        </div>
    );
}
export default Age;