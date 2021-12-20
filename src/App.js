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
import Home from "./views/Home"
import File from "./views/File"
import FirebaseServices from "./services/firebaseServices";
import Products from "./views/Products"


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
                       <Route exact path='home' element={<Home />}/>
                       <Route exact path='file' element={<File />}/>
                       <Route exact path='fire' element={<FirebaseServices />}/>
                       <Route exact path='products' element={<Products />}/>
                   </Route>

               </Routes>
               </GlobalWrapper>
           </BrowserRouter>
       </Provider>

  );
 }
 export default App


