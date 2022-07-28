import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import form from './components/Homepage';
import { BrowserRouter as Router,Route, Routes,Link} from 'react-router-dom';
import {userAuthContextProvider} from "./Google/Google"
import react from "react";
import Title from './components/title';
import AddTodo from './components/AddTodo';



import Project from './components/protect';
import Homepage from './components/Homepage';
import React from 'react';
import { collection, deleteDoc, onSnapshot, QuerySnapshot, updateDoc,doc,query } from 'firebase/firestore';
import { async } from '@firebase/util';

import {db} from './config/firebase'
import Todo2 from './components/Todo2';


export default function App() {

  const [todos,setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db,"todos"));
    const unsub = onSnapshot(q,(QuerySnapshot)=>{
      let todoArray = [];
      QuerySnapshot.forEach((doc) => {
        todoArray.push({...doc.data(),id: doc.id});
      })
      setTodos(todoArray);
    });
    return () => unsub();
  },[]);

  const handleEdit = async (todo,title) => {
    await updateDoc(doc(db,"todos",todo.id),{title:title});
  }
  const toggleComplete = async(todo) => {
    await updateDoc(doc(db,"todos",todo.id),{
      completed: !todo.completed
    });
  };
  const handleDelete = async(id) => {
    await deleteDoc(doc(db,"todos",id));
  };

  return(
<div>
<Router>
  <userAuthContextProvider>

  <Routes>
  <Route exact path="/" element ={<Login/>} />
  <Route  path="/sign-up" element={<Signup/>}/>
 
    <Route path= "/AddTodo" element={<Project>
      <div>
        <Title/>
      </div>
      <div>
        <AddTodo/>
      </div>
      <div className="todo_container">
        {todos.map((todo)=>(
          <Todo2
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          />
        ))}
        
      </div>
    </Project>} />

  </Routes>
  </userAuthContextProvider>
  </Router>
</div>

  )
  return (
<>


    
<Router>

    {/* <userAuthContextProvider> */}
    <nav></nav>
<Routes>
    <Route  path="/" element={<Login />}/>
    
    </Routes>
    {/* </userAuthContextProvider> */}
    
</Router>

     
      
     
    

    </>
  );
}




/*export default App; 
*/
