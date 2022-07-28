import React , {useState} from 'react'
import { useNavigate} from  'react-router-dom';
import {Link} from "react-router-dom"
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase'
import '../css/login.css'
import GoogleButton from 'react-google-button'
import { color } from '@mui/system';

function Login (){

const [email, setEmail] = useState('');
const [password, setPassword] = useState("");

    const btn ={
        width: '150px',
        height: '30px',
        marginTop:"3%",
       
    }
    
    let navigate= useNavigate();

    const Login=(()=>{ 

        signInWithEmailAndPassword(auth,email,password).then(()=>{
            navigate("/AddTodo");
        })
  
        })
    


return (
<div className="container">
 <div className="Inputs">
    <h1>Welcome Back</h1><br></br>
    <h2> Manage You Task Checklist Easily</h2><br></br>
    <h4>Email</h4>
    <input type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/> <br></br><br></br>

    <h4>Password</h4>
    <input type="password" placeholder="Enter your password"  onChange={(e)=> setPassword(e.target.value)} />
  </div>
    <button style={btn} onClick={Login}>Login </button>


    <span>Dont have an account?</span> 
    <span>
    
    
    <Link to="/sign-up">Create one</Link>
     </span>

     <h2>OR</h2>

     <div >
 <GoogleButton className="Google"></GoogleButton>
 

</div>

</div>
);


}

export default Login