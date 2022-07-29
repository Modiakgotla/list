import react from "react";
import '../css/login.css'
import { Navigate, useHistory, Link} from  'react-router-dom';
import Login from "./Login";
import '../css/title.css'
import pic from '../image/me.png';

export default function Title (){

    const LO ={
        width: '150px',
        height: '30px',
        marginTop:"3%",
        left:"100px"
       
    }


 const uit = (()=>{
    Navigate("/")
 })


    return (
        
        

        <div className="title">
         <div className="photo">
               <img src={pic} alt=""/>
            </div>
            <h1>Todo App</h1>
            <div className="LO">
            <button  onClick={uit}>Log Out</button>
          
            </div>
            
           
       </div>
       
       
        
        
    )
}

