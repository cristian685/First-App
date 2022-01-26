import {Provider} from "react-redux";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Login from "./views/Login";
import React from "react";
import ForgotPassword from "./views/ForgotPassword";
import SignUp from "./views/SignUp"
import About from "./views/About"
import GlobalWrapper from '../src/views/GlobalWrapper';
import {store} from "./store/store"
import Contact from "./views/Contact"
import Home from "./views/Home"
import Products from "./views/Products"
import Admin from "./views/AdminPage"
import PrivateOutlet from "./components/PrivateOutlet";
import "./style.css"
import Profile from "./views/Profile";
import YourAccountPage from "./views/YourAccountPage";


function App() {
   return (
       <Provider store={store} >
           <BrowserRouter>
               <GlobalWrapper>
               <Routes>
                   <Route exact path='forgotPass' element={<ForgotPassword />}/>
                   <Route exact path='signup' element={<SignUp />}/>
                   <Route exact path='login' element={<Login />}/>
                   <Route exact path='home' element={<Home />}/>
                   <Route exact path='about' element={<About />}/>
                   <Route exact path='contact' element={<Contact />}/>
                   <Route exact path='/' element={<PrivateOutlet />}>
                       <Route exact path='products' element={<Products />}/>
                       <Route exact path='admin' element={<Admin />}/>
                       <Route exact path='profile' element={<Profile />}/>
                       <Route exact path='youraccount' element={<YourAccountPage />}/>
                   </Route>
               </Routes>
               </GlobalWrapper>
           </BrowserRouter>
       </Provider>

  );
 }
 export default App


