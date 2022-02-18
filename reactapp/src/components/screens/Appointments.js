import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import base_url from '../../api/bootapi';
import '../styles/Appointments.css';

function Appoinments(){
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
    axios.post(`${base_url}/`,data).then(
      (response)=>{
        console.log(response);
        console.log("success");
      
      },(error)=>{
        console.log(error);
        console.log("error");
      }
    )
  }
  return (
    <Formik
      initialValues={{
        
        nameofproduct: '',
        modelno: '',
        mobile:'',
        dateofpurchase: '',
        problemoftheproduct:  '',
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
        <img src={"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="" className="img" />
        <div className='address'>
            <label>Name : timex service</label><br />
            <label>Address : siliguri</label><br />
            <label>E-mail:hellonew@gmail.com</label><br />
            <label>Phone Number: 6574834541</label><br />
        </div>
          <Form>
          <div className='inp'>
          <h1 className='mt-4'style={{fontWeight:"bold", paddingBottom: "2vh"}} >Product Details</h1>
            <TextBar label="Name of Product" name="nameofproduct" type="text" />
            <TextBar label="Model Number" name="modelno" type="text" />
            <TextBar label="Mobile" name="mobile" type="text" />
            <TextBar label="Date of Purchase" name="dateofpurchase" type="date" />
            <TextBar label="Problem of the Product" name="problemoftheproduct" type="password" />
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
