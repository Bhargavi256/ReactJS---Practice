import {useState} from "react";
function Todo(){
    const [todoList,settodoList] = useState([]);
    const [newTask,setnewTask] = useState("");
    const handleChange = (event)=>{
        setnewTask(event.target.value);
    };
    const addTask = () =>{
        const newTodoList=[...todoList,newTask];
        settodoList(newTodoList);
    }
    return(
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange}/>
                <button type="button" onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
             {todoList.map((task)=>{
                return<h1>{task}</h1>
             })}
            </div>
        </div>
    );
}
export default Todo;