import { useState } from "react";
import { Task } from "./Task";

function TodoApp(){
    const[todoList,settodoList]=useState([]);
    const[newTask,setnewTask]=useState("");
    const handleChange =  (event)=>{
        setnewTask(event.target.value);
    }
    const addTask=()=>{
        const  task = {
            id: todoList.length===0?1:todoList[todoList.length-1].id+1,
            taskName:newTask,
            complete:false
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
    const completeTask =(id)=>{
        settodoList(todoList.map((task)=>{
             if(task.id===id){
                return{...task,complete:true}
             }
             else
                return task;
        }));
    };
    return(
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange}/>
                <button type="button" onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task)=>{
                    return (<Task taskName={task.taskName} id={task.id}
                        complete={task.complete}
                    deleteTask = {deleteTask} 
                    completeTask = {completeTask}/>);
                        
                    
                })}
            </div>
        </div>
    );
}

export default TodoApp;