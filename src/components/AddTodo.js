import React, { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { Navigate, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function AddTodo(props) {
    const [title, setTitle] = React.useState("");
    const [priority, setPriority] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
                priority,
                completed: false,
            });
            setTitle("");
        }
    };




    const add = (() => {
        console.log(title)
        console.log(priority);

        const collectionReF = collection(db, "Priority");

        const priorityType = {
            title: title,
            priority: priority,

        };

        addDoc(collectionReF, priorityType).then(() => {
            alert("Added successfully")
        }).catch((error) => {
            console.log(error);
        })

        props.add(title, priority);
    })



    return (


        <form onSubmit={handleSubmit}>


            <div className="input_container">
                <input
                    type="text"
                    placeholder="Enter A To Do..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="btn_container">
                <button>Add</button> <br></br> <br></br>
                <select onChange={(e) => setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>


            </div>

        </form>
    );
}

