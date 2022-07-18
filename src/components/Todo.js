import React, {useState} from "react";
import firebase from "../config/firebase";

export default function Todo({todo}) {
    const [newTaskName,setTaskName] =useState("")
const handleChange=(e) =>{
    if(todo.complete===true){
        setNewTaskName(todo.taskName);
    } else {todo.taskName = "";
    setTaskName(e.target.value);}
    
}
const completeTodo = () => {
    const todoRef=firebase.db().ref("Todo").child(todo.id);
    todoRef.update({
        complete: !todo.complete,
    });
};
const editTodo = () => {
    const todoRef=firebase.db().ref("Todo").child(todo.id);
    todoRef.update({
        taskName:newTaskName
    })
};
const deleteTode = () => {const todoRef=firebase.db().ref("Todo").child(todo.id);
todoRef.remove();
}
return (
<li className={todo.complete ?"complete" : "list-item"}>
<input 
type ="text"
value={todo.taskName === ""?
newTaskName : todo.taskName}
className="list"
onChange={handleChange}/>

<button className="button-complete
task-button" onClick={completeTodo}
>
    <i className="fa fa-check-circle"></i>
</button>
<button className="button-edit task-button" onClick={editTodo}>
    <i className="fa fa-edit" />
</button>
<button className="button-delete task-button" onClick={deleteTode}>
    <i className="fa fa-trash" />
</button>



</li>

)

}