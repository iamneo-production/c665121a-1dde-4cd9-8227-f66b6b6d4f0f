import React, { useState } from "react";
import { Formik, Form, Field} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import base_url from '../../api/bootapi';
import '../styles/Appointments.css';
import watch1 from '../assets/watch1.jpg';
import data from "./data";

function Appoinments(){
  const [filter] = useState('');
  const validate = Yup.object({
    nameofproduct: Yup.string()
      
      .required('Name of the product is Required'),
    modelno: Yup.string()
      .required('Model number is Required'),
    mobile:Yup.string()
      .min(10,'should be 10 number')
      .max(10,'should be 10 number')
      .required('Mobile Number is Required'),
    dateofpurchase: Yup.date()
      .transform((curr, orig) => orig === '' ? null : curr)
      .required('Date is required'),
    problemoftheproduct:  Yup.string()
      
      .required('Please enter the problem of the product'),
  })
 
  const postDatatoServer=(data)=>{
    axios.post(`${base_url}/signup`,data).then(
      (response)=>{
        console.log(response);
        console.log("success");
      
      },(error)=>{
        console.log(error);
        alert("email already exists");
        console.log("error");
      }
    )
  }
  let dataSearch = data.service_center.filter(item =>{
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
  )});
  return (
    <Formik
      initialValues={{
        
        nameofproduct: '',
        modelno: '',
        mobile:'',
        dateofpurchase: '',
        problemoftheproduct:  '',
        AvailableSlots: '',
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
        {dataSearch.map((e)=>{
          return(
        <img src={e.serviceCenterImageUrl} alt="" className="img" />
        )
      })}
        <div className='address'>
        {dataSearch.map((e)=>{
          return(
            <div>
              {/* <p>{e.serviceCenterName}</p> */}
            <label>Name : {e.serviceCenterName}</label><br />
            <label>E-mail: {e.serviceCentermailId}</label><br />
            <label>Phone Number: {e.serviceCenterPhone}</label><br />
            <label>Address :  {e.serviceCenterAddress}</label>
            </div>
          )
        })}
           
        </div>
        
          <Form>
          <div className='inp'>
          <h1 className='mt-4'style={{fontWeight:"bold", paddingBottom: "2vh"}} >Product Details</h1>
            <TextBar label="Name of Product" name="nameofproduct" type="text" />
            <TextBar label="Model Number" name="modelno" type="text" />
            <TextBar label="Mobile" name="mobile" type="text" />
            <TextBar label="Date of Purchase" name="dateofpurchase" type="date" />
            <TextBar label="Problem of the Product" name="problemoftheproduct" type="text" />
            <TextBar label="Available Slots" name="Availableslots"/>
            
            <button className="btn btn-dark mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
            <button className="btn btn-success mt-3"style={{marginLeft:40}} type="submit">BOOK</button>
         </div> 
          </Form>
        </div>
        
        </div>
      )}
    </Formik>
  )
} 
export default Appoinments;
