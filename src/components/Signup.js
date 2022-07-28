import {Link} from "react-router-dom"
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';
import {auth} from "../config/firebase"
import {useNavigate} from "react-router-dom"
import GoogleButton from 'react-google-button'


function SignUp() {
 
    const [uname,setUname] = useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword] = useState("");
   
    let navigate = useNavigate();
    const btn ={
        width: '150px',
        height: '30px',
        marginTop:"3%"
    }

    const Register=(()=>{ 

        createUserWithEmailAndPassword(auth,uname,email,password).then(()=>{
          navigate("/AddTodo");
        })
  
        })

  

return(
<div className="container">

    <h1>Welcome</h1><br></br>
    <h2> Manage You Task Checklist Easily</h2><br></br>

<h4>Full Name</h4>

<input type="Full Name" placeholder="Full Name" onChange={(e)=> setUname(e.target.value)} /><br></br>
<h4>Email</h4>
<input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} /><br></br>

<h4>Password</h4>
<input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} /><br></br>

<button style={btn} onClick={Register}>Create account </button>

<p>Already have an account? </p> 

    
    
<Link to="/">Login</Link>
     
 <h2>OR</h2>

 <div >
 <GoogleButton className="Google"></GoogleButton>
 

</div>
</div>





);
}

export default SignUp;