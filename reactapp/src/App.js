import React from "react";

import Register from './components/screens/Register'
import Login from './components/screens/Login'
import Mainpage from './components/screens/Mainpage'
import Error from './components/screens/Error'
import AddCenter from "./components/screens/AddCenter"
import Appointments from './components/screens/Appointments'
import EditCenter from './components/screens/EditCenter'
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Search from "./components/screens/Home";
function App() {
  return (
    
    <div>
    <Router>
      <Switch>
      <Route path="/" exact component={Mainpage}></Route>
      <Route path="/admin/home" exact component={Search}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Register" exact component={Register}></Route>
        <Route path="/admin/AddServiceCenter" exact component={AddCenter}></Route>
        <Route path="/admin/Edit" exact component={EditCenter}></Route>
        <Route path="/Appointments" exact component={Appointments}></Route>
        <Route path="/**" exact component={Error}></Route>
      </Switch>
    </Router>
  </div>
    
  );
}

export default App;
