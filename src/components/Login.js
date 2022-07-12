import React, {useState,useEffect} from 'react';
import {signInWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"

export default function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth,email,password).catch((err) =>
        alert(err.message)
        );
    };

    return (
        <div className="login">
            <h1>To-List</h1>
            <div className="login-container">
                <input type="email" onChange={handleEmailChange} value={email}/>
                <input type="password" onChange={handlePasswordChange} value={password}/>
                <button> Sign In</button>
                <p>Don't have an account?</p><a href="">Create an account</a>
            </div>

        </div>
    )

}
