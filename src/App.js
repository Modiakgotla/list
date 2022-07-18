import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router,Route, Routes,Link} from 'react-router-dom';
import {userAuthContextProvider} from "./Google/Google"


import Project from './components/protect';

export default function App() {

  return(
<div>
  <Router>
    <Routes>

  <Route path="/dfs" element ={<Login/>} />
  <Route  path="/sign-up" element={<Signup/>}/>
  
  </Routes>
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
