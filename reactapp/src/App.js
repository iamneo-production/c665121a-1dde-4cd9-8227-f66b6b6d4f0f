import React from "react";
import Navbar from './components/screens/Navbar'
import Register from './components/screens/Register'
import Login from './components/screens/Login'
import Mainpage from './components/screens/Mainpage'
import Error from './components/screens/Error'
import AddCenter from "./components/screens/AddCenter";
import Appointments from './components/screens/Appointments'
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Search from "./components/screens/Home";
function App() {
  return (
    
    <div>
    <Router>
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Mainpage}></Route>
      <Route path="/home" exact component={Search}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Register" exact component={Register}></Route>
        <Route path="/AddServiceCenter" exact component={AddCenter}></Route>
        <Route path="/Appointments" exact component={Appointments}></Route>
        <Route path="/**" exact component={Error}></Route>
      </Switch>
    </Router>
  </div>
    
  );
}

export default App;
