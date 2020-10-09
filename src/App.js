import React from 'react'; 
import { useReducer } from   "react"
 import Presciption from './components/Presciption'
import Appbar from './components/Appbar'
import Login from './components/Login'
import NurseForm from './components/NurseForm'
import Pacientview from './components/Pacientview'
import Pacientform from './components/PatientsForm'
import Nurseview from './components/Nurseview'
import {reducer,reducersignin} from './components/Logic'
import {Context} from './components/data'
import { BrowserRouter, Route } from "react-router-dom";




function App() {  
  const [get,set] = useReducer(reducer,{code:''})
  const [getsign] = useReducer(reducersignin,{success:'f'})
  return (
   <Context.Provider value={{get,set,getsign}}> 
    <div className="App">     
     <BrowserRouter> 
     <Appbar/>
     <Route exact path='/' component={get.code.charAt(0)==='N'? Nurseview:get.code.charAt(0)==='P'? Pacientview:get.code?Presciption:Login}/>
      <Route   path='/nurse' component={NurseForm}/>
       <Route   path='/pacient' component={Pacientform}/>
     </BrowserRouter>  
     
    </div>  
   </Context.Provider>
  );
}

export default App;
