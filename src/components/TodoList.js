import React, {useState,useEffect} from "react";
import firebase from "../config/firebase";
import Todo from "../components/Todo"

export default function TodoList() {
    const [todoList,setTodoList] = useState();
    useEffect(()=> {
        const todoRef = firebase.db().ref("Todo");
        todoRef.on("value", (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];

            for (let id in todos) {
                todoList.push({id,...todos[id]});
            }
            setTodoList(todoList)
            console.log(todoList)
        });
    }, []);

    return  (
        <div>
            {todoList ? todoList.map((todo)=> <todo todo={todo} />): ""}
        </div>
    );
}