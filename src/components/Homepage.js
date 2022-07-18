import React, {useEffect, useState} from "react";
import { Button, TextField } from "@mui/material";
import { Firebase } from "firebase";
import {auth,db} from "../config/firebase"


function Homepage() {

    const [todoInput,setTodoInput] = useState('')
    function addTodo(e) {
        e.preventDefault();

        db.collection("todos").add({
            inprogess: true,
            timestamp: Firebase.firestore.fieldValue.serverTimestamp(),
            todo: todoInput,
        })
    }

   return(
    <div className="Homepage"
        
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }}
        >
            <div>
            <h1>To do list</h1>
            <TextField
            id="standard-basic"
            label="Write a Todo"
            value={todoInput}
            onChange={(e) => 
                setTodoInput(e.target.value)}
                style={{maxWidth: "300px", width: "90vw"
            }}
            />
            <Button variant="contained" onClick={addTodo}>
               Default
            </Button>
            
        </div>


    </div>
   )

   ;
}

export default Homepage;