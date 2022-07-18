import React from "react";
import {Navigate} from "react-router-dom"


const Protect = ({children}) => {
    let auth="true";
    if(!auth){
      <Navigate to="/"/>;
    }
    return children;
};

export default Protect;