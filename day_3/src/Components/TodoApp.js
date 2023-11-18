import { useState } from "react";


function TodoApp(){
    const[todoList,settodoList]=useState([]);
    const[newTask,setnewTask]=useState("");
    const handleChange =  (event)=>{
        setnewTask(event.target.value);
    }
    const addTask=()=>{
        const  task = {
            id: todoList.length===0?1:todoList[todoList.length-1].id+1,
            taskName:newTask
        };
        const  newTodoList = [...todoList,task];
        settodoList(newTodoList);
    }
    const deleteTask=(id)=>{
     const newTodoList = todoList.filter((task)=>{
        if(task.id===id)
           return false;
        else
           return true;
     });
     settodoList(newTodoList);
    };
    return(
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange}/>
                <button type="button" onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task)=>{
                    return(
                    <div>
                    <h1>{task.taskName}</h1>
                    <button onClick={()=>deleteTask(task.id)}>X</button>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TodoApp;