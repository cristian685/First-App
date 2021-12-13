import './App.css';
import Login from "./views/Login";
import React from "react";
import HomePage from"./views/HomePage"
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import SingUp from"./views/SingUp"
import About from "./views/About"

function App() {
   return (
       <BrowserRouter>
           <Routes>
               <Route exact path='/forgotPass' element={<ForgotPassword />}/>
                   <Route exact path='/login' element={<Login />}/>
               <Route exact path='/' element={<HomePage />}/>
               <Route exact path='/singup' element={<SingUp />}/>
               <Route exact path='/about' element={<About />}/>
           </Routes>
       </BrowserRouter>

  );
 }
 export default App


