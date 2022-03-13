import React from "react";

import Register from './components/screens/Register'
import Login from './components/screens/Login'
import Mainpage from './components/screens/Mainpage'
import Error from './components/screens/Error'
import AddCenter from "./components/screens/AddCenter"
import Appointments from './components/screens/Appointments'
import EditCenter from './components/screens/EditCenter'
import ViewUserBookings from "./components/screens/ViewUserBookings";
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Search from "./components/screens/Home";
import HomeUser from "./components/screens/HomeUser";
import User from "./components/screens/user";
import EditUser from "./components/screens/EditUser";
import AllBookings from "./components/screens/AllBookings";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import UnAuthorized from "./components/screens/UnAuthorized";

function App() {
  return (
    
    <div>
    <Router>
      <Switch>
        <Route path="/" exact component={Mainpage}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Register" exact component={Register}></Route>
        <AdminRoute path="/admin/home" exact component={Search}></AdminRoute>
        <AdminRoute path="/admin/AddServiceCenter" exact component={AddCenter}></AdminRoute>
        <AdminRoute path="/admin/Edit" exact component={EditCenter}></AdminRoute>
        <AdminRoute path="/admin/Edituser" exact component={EditUser}></AdminRoute>
        <UserRoute path="/user/home" exact component={HomeUser}></UserRoute>
        <UserRoute path="/user/Appointment" exact component={Appointments}></UserRoute>
        <AdminRoute path="/admin/usermanagement" exact component={User}></AdminRoute>
        <AdminRoute path="/admin/allBooking" exact component={AllBookings}></AdminRoute>
        <UserRoute path="/user/mybooking" exact component={ViewUserBookings}></UserRoute>
        <Route path="/unauthorized" exact component={UnAuthorized}></Route>
        
        <Route path="/**" exact component={Error}></Route>
      </Switch>
    </Router>
  </div>
    
  );
}

export default App;
