import './App.css';
import Login from "./views/Login";
import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
function App() {
   return (
       <Router>
           <div className="App">
               <Login />
               <Switch>
                   <Route exact path='/forgotPass' element={< ForgotPassword />}>
                   </Route>
               </Switch>
           </div>
       </Router>
  );
 }
 export default App

