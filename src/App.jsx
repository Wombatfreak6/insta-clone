import React,{useState} from 'react'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import Dashboard from './Components/Dashboard.jsx';

const App = () => {
  const[toggleAuth,setToggleAuth]=useState(false);
  const[isAuth,setIsAuth]=useState(false);
  function handleToggleauth(){
    setToggleAuth(!toggleAuth)
  }
  if (!isAuth){
    return (
      <div>{toggleAuth?<Login handleToggleauth={handleToggleauth} setIsAuth={setIsAuth}/>:<Signup handleToggleauth={handleToggleauth}/>}</div>
    )
  }
  return(
    <div>
      <Dashboard/>
    </div>
  )
}

export default App
