import {Link} from "react-router-dom"
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';
import {auth} from "../config/firebase"
import {useHistory} from "react-router-dom"
function SignUp() {
 

    const [email,setEmail]=useState('');
    const [password,setPassword] = useState("");
   
    let history = useHistory();
    

    const Register=(()=>{ 

        createUserWithEmailAndPassword(auth,email,password).then(()=>{
            history.push("/home");
        })
  
        })

  

return(
<div className="container">

    <h1>Register Account Here</h1>
<input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} /><br></br>


<input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />

<button onClick={Register}>Sign Up </button>

</div>





);
}

export default SignUp;