import React from "react";
import checkCircleicon from "@mui/icons-material/CheckCircle"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete"
import '../css/todo2.css'
export default function Todo({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit,

})
{
    const [newTitle,setNewTitle] = React.useState(todo.title);
    const [prio,setPrio] = React.useState(todo.priority)

    const handleChange = (e) => {
        e.preventDefault();
        if (todo.complete === true) {
    setNewTitle(todo.title);
    setPrio(todo.priority);
 }  else {
    todo.title = "";
    todo.priority="";
    setNewTitle(e.target.value);
    setPrio(e.target.value);
 } 

};

return (
    
    <div className="todo">
        {todo.priority === "High" ? (
        <div>
        <input 
        style={{textDecoration: todo.completed && "line-through"}}
        type= "text"
        value={todo.title === "" ? newTitle: todo.title}
        className="list"
        onChange={handleChange}
        />
        <div>
            <button 
            className="button-complete"
            onClick={() => toggleComplete(todo)}
            >
                <checkCircleicon id="i" />
            </button>
            <button
                className="button-edit"
                onClick={()=> handleEdit(todo,newTitle)}
                >
                    {/* <EditIcon id="i" /> */}

            </button>
            <button className="button-delete"
            onClick={() => handleDelete(todo.id)}
            >
                {/* <DeleteIcon id="i" /> */}

            <>complete</>
            </button>
            <div className="High-line"></div>

        </div>
    </div>): todo.priority === "Medium" ?(
        <div>
        <input 
        style={{textDecoration: todo.completed && "line-through"}}
        type= "text"
        value={todo.title === "" ? newTitle: todo.title}
        className="list"
        onChange={handleChange}
        />
        <div>
            <button 
            className="button-complete"
            onClick={() => toggleComplete(todo)}
            >
                <checkCircleicon id="i" />
            </button>
            <button
                className="button-edit"
                onClick={()=> handleEdit(todo,newTitle)}
                >
                    {/* <EditIcon id="i" /> */}

            </button>
            <button className="button-delete"
            onClick={() => handleDelete(todo.id)}
            >
                {/* <DeleteIcon id="i" /> */}

            <>complete</>
            </button>
          
            <div className="Medium-line"></div>
        </div>
    </div>

    ): todo.priority === "Low" ?( 
        <div>
        <input 
        style={{textDecoration: todo.completed && "line-through"}}
        type= "text"
        value={todo.title === "" ? newTitle: todo.title}
        className="list"
        onChange={handleChange}
        />
        <div>
            <button 
            className="button-complete"
            onClick={() => toggleComplete(todo)}
            >
                <checkCircleicon id="i" />
            </button>
            <button
                className="button-edit"
                onClick={()=> handleEdit(todo,newTitle)}
                >
                    {/* <EditIcon id="i" /> */}

            </button>
            <button className="button-delete"
            onClick={() => handleDelete(todo.id)}
            >
                {/* <DeleteIcon id="i" /> */}

            <>complete</>
            </button>
            <div className="Low-line"></div>

        </div>
    </div>

    )

    :( 
        <div>
        <input 
        style={{textDecoration: todo.completed && "line-through"}}
        type= "text"
        value={todo.title === "" ? newTitle: todo.title}
        className="list"
        onChange={handleChange}
        />
        <div>
            <button 
            className="button-complete"
            onClick={() => toggleComplete(todo)}
            >
                <checkCircleicon id="i" />
            </button>
            <button
                className="button-edit"
                onClick={()=> handleEdit(todo,newTitle)}
                >
                    {/* <EditIcon id="i" /> */}

            </button>
            <button className="button-delete"
            onClick={() => handleDelete(todo.id)}
            >
                {/* <DeleteIcon id="i" /> */}

            <>complete</>
            </button>
            <div className="Low-line"></div>

        </div>
    </div>
    )
    }

        
        
    </div>

)
}