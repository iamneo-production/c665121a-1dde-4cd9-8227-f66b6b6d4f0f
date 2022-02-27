import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import base_url from '../../api/bootapi';

function EditBooking(id,name,date,time){
    let booking={
        name:"Sonata Service",
        modelno:"2345",
        dateOfPurchase:"31-08-2000",
        contactNo:"9848250250",
        problem:"Issues With the Second Hand Skipping",
        slot:"04:00pm to 06:00pm"

    }

    const validate = Yup.object({
      name: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Name is Required'),
      modelno:Yup.string()
        .min(10,'should be 10 number')
        .max(10,'should be 10 number')
        .required('Model Number is Required'),

        dateOfPurchase:Yup.string()
        .transform((curr, orig) => orig === '' ? null : curr)
        .required('Date is required'),
        

        
        contactNo:Yup.string()
        .min(10,'should be 10 number')
        .max(10,'should be 10 number')
        .required('Phone Number is Required'),
      problem:Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Problem of product is Required'),
      slot: Yup.string()
        .max(20, 'Must be 20 characters or less'),
    })
    const sendData=(data)=>{
      axios.put(`${base_url}/updateBooking`,data).then(
        (response)=>{
          console.log(response);
        },(error)=>{
          console.log(error);
        }
      )
    }
    return (
      <Formik
        initialValues={{
          name:booking.name,
          modelno:booking.modelno,
          dateOfPurchase:booking.dateOfPurchase,
          contactNo:booking.contactNo,
          problem:booking.problem,
          slot:booking.slot
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
          <div>
            <h1 className='mt-4'style={{fontWeight:"bold"}} >Enter the Product Details </h1>
            <Form>
            
              <TextBar label="Name"   name="name" type="text" id="editName" />
              <TextBar label="ModelNumber"   name="modelno" type="text" id="editNumber" />
              <TextBar label="DateOfPurchase" name="date" type="date" id="editDate" />
              <TextBar label="Contact"  name="contactNo" type="text" id="editContact" />
              <TextBar label="Problem"   name="problem" type="text" id=" editProblem"/>
              <TextBar  label="Slot"  name="slot" type="text" id="editSlot" style={{height:"80px"}}/>
  
              
             <button className="btn btn-dark mt-3" type="submit">Update</button>
              <button className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
              
              
            </Form>
  
          </div>
        )}
      </Formik>
    )
  } 
export default EditBooking;
