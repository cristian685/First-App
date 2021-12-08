import './App.css';
import Login from "./views/Login";
import React from "react";
import HomePage from"./views/HomePage"
import { BrowserRouter ,Switch, Route,Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
function App() {
   return (
       <BrowserRouter>
           <Routes>
               <Route exact path='/forgotPass' element={<ForgotPassword />}/>
                   <Route exact path='/login' element={<Login />}/>
               <Route exact path='/' element={<HomePage />}/>
           </Routes>
       </BrowserRouter>

  );
 }
 export default App


