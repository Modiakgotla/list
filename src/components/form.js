import React, {useState} from "React";
import firebase from "../config/firebase";


export default function Forms() {

    const [taskName,setTaskName] = useState("");

    const createTodo = (e) => {
        e.preventDefault();
        const todoRef =firebase.db().ref("Todo");
        const todo={
            taskName,
            completed: false,
        };
        todoRef.push(todo);

    };
    const handleChange = (e) => {
        setTaskName(e.target.value);
    }

    return (
        <form onSubmit={createTodo}>
            <input 
            type= "text"
            placeholder="Enter a Todo..."
            className="task-input"
                value={taskName}
                required
                onChange={handleChange} />
        
                <button className="button-add" type="submit">
                    ADD
                </button>
        </form>
        
            )

}



