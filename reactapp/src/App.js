import React from "react";
// import Navbar from './components/screens/Navbar'
import Register from './components/screens/Register'
import Login from './components/screens/Login'
import Mainpage from './components/screens/Mainpage'
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    
    <div>
    <Router>
      <Switch>
      <Route path="/" exact component={Mainpage}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Register" exact component={Register}></Route>
      </Switch>
    </Router>
  </div>
    
  );
}

export default App;
