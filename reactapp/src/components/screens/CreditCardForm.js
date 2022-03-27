import React,{useState} from "react";
import NavbarUser from './NavbarUser';
import { Button,Form , Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosObject from '../../api/bootapi';
import '../styles/CreditCardForm.css';
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreditCardForm = () => {
  const [values, setValues] = useState({
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
})

const handleChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
   
}

const editPayment=()=>{
  let id = localStorage.getItem('appId');
  axiosObject.put(`/payment/${id}`).then(
    (response)=>{
      localStorage.removeItem("appId");
      toast.success('payment successful',{autoClose: 2000});
      setTimeout(() => { window.location.replace('/user/mybooking'); }, 2000);
    },(error)=>{
      console.log(error);
    }
  )
}

const handleSubmit =e => {
    e.preventDefault();
   editPayment();
    
};
  return (
    <>
    <ToastContainer/>
    <div className="App-temp">
       <NavbarUser/>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <div className="creditCard">
          <Cards
            expiry={values.cardExpiration}
            focused={values.focus}
            name={values.cardName}
            number={values.cardNumber}
          />
          
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              Card Name:
              <Form.Control
                type="text"
                id="cardName"
                name="cardName"
                placeholder="Cardholder Name"
                value={values.cardName}
                onChange={handleChange}
                required
              />
          
            </Form.Group>
            <Form.Group>
              Card Number:
              <Form.Control
                type="text"
                id="cardNumber"
               required
                name="cardNumber"
                placeholder="Card Number"
                value={values.cardNumber}
                onChange={handleChange}
                minLength="16"
                maxLength="16"
              />
            </Form.Group>
            <Row>
            <Col>
                <Form.Group>
                  Expiration Date:
                  <Form.Control
                    type="text"
                    id="cardExpiration"
                    required
                    name="cardExpiration"
                    placeholder="Expiration Date"
                    value={values.cardExpiration}
                    onChange={handleChange}
                    minLength="4"
                    maxLength="4"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group>
                  Charges:
                  <Form.Control
                    type="text"
                    id="charge"
                    required
                    name="charge"
                    placeholder="Please Enter the amount"
                   
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group>
                  CVV number:
                  <Form.Control
                    type="text"
                    id="charge"
                    required
                    name="cvv"
                    placeholder="Please Enter your cvv"
                    minLength="3"
                    maxLength="3"
                  />
                </Form.Group>
              </Col>
            </Row>
         <br/>
            <Button
              size={"block"}
              id="validateButton"
              type="submit"
            >
              Pay
            </Button>
            
          </Form>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default CreditCardForm;