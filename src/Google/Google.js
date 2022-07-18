import { useEffect,useState,useContext, createContext } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const userSignIn = createContext();

export function userSignInProvider({Children})
{
    const [user,setUser] = useState("");
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function login (email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        return signOut(auth);
    }
    function googleSignIn()
    {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return () =>
        {
            unsubscribe();
        }

    },[]);

    return <userSignIn.Provider value={{user,signUp,login,logOut,googleSignIn}}>{Children}</userSignIn.Provider>
}

export function useUserAuth() {
    return useContext(userSignIn);
}