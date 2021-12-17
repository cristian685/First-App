import {Provider} from "react-redux";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Login from "./views/Login";
import React from "react";
import ForgotPassword from "./views/ForgotPassword";
import SignUp from "./views/SignUp"
import About from "./views/About"
import Navbar from './components/Navbar'
import GlobalWrapper from '../src/views/GlobalWrapper';
import {store} from "./store/store"
import Contact from "./views/Contact"


function App() {
   return (
       <Provider store={store}>
           <BrowserRouter>
               <GlobalWrapper>
               <Routes>
                   <Route exact path='forgotPass' element={<ForgotPassword />}/>
                   <Route exact path='signup' element={<SignUp />}/>
                   <Route exact path='login' element={<Login />}/>
                   <Route exact path='/' element={<Navbar />}>
                       <Route exact path='about' element={<About />}/>
                       <Route exact path='contact' element={<Contact />}/>
                   </Route>

               </Routes>
               </GlobalWrapper>
           </BrowserRouter>
       </Provider>

  );
 }
 export default App


