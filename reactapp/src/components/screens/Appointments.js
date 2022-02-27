import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import base_url from '../../api/bootapi';
import '../styles/Appointments.css';
import NavbarUser from './NavbarUser';

function Appoinments(){
  let center=JSON.parse(localStorage.getItem('data'));
  let user=JSON.parse(localStorage.getItem('user'));
  const validate = Yup.object({
    productName: Yup.string()
      
      .required('Name of the product is Required'),
    productModelNo: Yup.string()
      .required('Model number is Required'),
    contactNumber:Yup.string()
      .min(10,'should be 10 number')
      .max(10,'should be 10 number')
      .required('Mobile Number is Required'),
    purchaseDate: Yup.date()
      .transform((curr, orig) => orig === '' ? null : curr)
      .required('Date is required'),
    problemStatement:  Yup.string()
      .required('Please enter the problem of the product'),
    bookingTime:Yup.number()
      .required('Please mention time for your booking')
      .min(10,'choose a time between 10am to 5pm')
      .max(17,'choose a time between 10am to 5pm')
  })
  const postDatatoServer=(data)=>{
    axios.post(`${base_url}/appointment`,data).then(
      (response)=>{
        console.log(response);
        window.location.replace("/user/mybooking");
      
      },(error)=>{
        console.log(error);
        console.log("error");
      }
    )
  }
  return (
    <div className='App-temp'>
    <NavbarUser/>
    <Formik
      initialValues={{
        u_id:user.id,
        sc_id:center.id,
        productName: '',
        productModelNo: '',
        contactNumber:user.mobile,
        purchaseDate: '',
        bookingDate:'',
        bookingTime:'',
        problemStatement:  '',
      }}
      validationSchema={validate}
      onSubmit={values => {
      
        console.log(values);
        postDatatoServer(values);
      }}
    >
      {formik => (
          <div className='contents'>
        <div className='Regdiv'>
        <img src={center.imageurl} alt="" className="img" />
        <div className='address'>
            <label>Name : {center.name}</label><br />
            <label>Address :{center.address}</label><br />
            <label>E-mail:{center.email}</label><br />
            <label>Phone Number: {center.mobile}</label><br />
        </div>
          <Form>
          <div className='inp'>
          <h1 className='mt-4'style={{fontWeight:"bold", paddingBottom: "2vh"}} >Product Details</h1>
            <TextBar label="Name of Product" name="productName" type="text" />
            <TextBar label="Model Number" name="productModelNo" type="text" />
            <TextBar label="Mobile" name="contactNumber" type="text" />
            <TextBar label="Date of Purchase" name="purchaseDate" type="date" />
            <TextBar label="Date of booking" name="bookingDate" type="date" />
            <TextBar label="Time of booking" placeholder="choose time in 24hr format" name="bookingTime" type="number" />
            <TextBar  label="Problem" placeholder="Description about problem" name="problemStatement" type="text" style={{height:"80px"}}/>
            <button className="btn btn-dark mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
            <button className="btn btn-success mt-3"style={{marginLeft:40}} type="submit">BOOK</button>
         </div> 
          </Form>
        </div>
        </div>
      )}
    </Formik>
    </div>
  )
} 
export default Appoinments;
