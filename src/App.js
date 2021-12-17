import './App.css';
import Login from "./views/Login";
import React from "react";
import HomePage from"./views/HomePage"
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import ForgotPassword from "./views/ForgotPassword";
import SignUp from "./views/SignUp"
import About from "./views/About"
import Navbar from './components/Navbar'
import GlobalWrapper from '../src/views/GlobalWrapper';

function App() {
   return (
       <BrowserRouter>
           <GlobalWrapper>
           <Routes>
               <Route exact path='/forgotPass' element={<ForgotPassword />}/>
                   <Route exact path='/login' element={<Login />}/>
               <Route exact path='/' element={<Navbar />}/>
               <Route exact path='/home' element={<HomePage />}/>
               <Route exact path='/signup' element={<SignUp />}/>
               <Route exact path='/about' element={<About />}/>
           </Routes>
           </GlobalWrapper>
       </BrowserRouter>

  );
 }
 export default App


