import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import base_url from '../../api/bootapi';
import '../styles/Appointments.css';
import '../styles/EditCenter.css';
import NavbarUser from './NavbarUser';
import {Link} from 'react-router-dom'
import NavBar from './Navbar';
  
function EditUser({name,email,phone,password}) {

    // let center=JSON.parse(localStorage.getItem('data'));
  let center = {
    id :102,
    name  :"timex service",
    email :"hellonew@gmail.com",
    address : "siliguri",
    mobile :"6574834541",
    imageurl :"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    details :"all types of timex watch service is available"
}

    const validate = Yup.object({
        username: Yup.string()
          .max(15, 'Must be 15 characters or less'),
        mobile:Yup.string()
          .min(10,'should be 10 number')
          .max(10,'should be 10 number'),
        email: Yup.string()
          .email('Email is invalid'),
        password:Yup.string()
          .min(8,'should contain 8 characters'),
})

const sendData=(data)=>{
    axios.put(`${base_url}/updateCenter`,data).then(
      (response)=>{
        console.log(response);
      },(error)=>{
        console.log(error);
      }
    )
  }
 return(
     <>
    <Formik
    initialValues={{
      id:center.id,
      name:center.name,
      mobile: center.mobile,
      address:center.address,
      imageurl: center.imageurl,
      email: center.email,
      details: center.details,
    }}
    validationSchema={validate}
    onSubmit={values => {
    
      console.log(values);
      sendData(values);
      localStorage.setItem('data',JSON.stringify(values));
      window.location.replace('/admin/home');
    }}
  >
    {formik => (
      <div className='edit-temp edit-user'>
        <h1 className='mt-4'style={{fontWeight:"bold"}} >Edit User Details </h1>
        <Form>
        
          <TextBar label="New Name"   name="name" type="text" id="editName" value = {name}/>
          <TextBar label="New Email"   name="email" type="email" id=" editEmail" value={email}/>
          <TextBar label="New Mobile"   name="mobile" type="number" id="editNumber" value={phone}/>
          <TextBar label="New Password"   name="password" type="password" id="editpassword" value={password}/>
         <button className="btn btn-dark mt-3" type="submit">Update</button>
          <button className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
          
          
        </Form>

      </div>
    )}
  </Formik></>
 )}
export default EditUser

