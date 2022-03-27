import React,{useState} from "react";
import NavbarUser from './NavbarUser';
import { Button,Form , Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import '../styles/CreditCardForm.css';
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


const CreditCardForm = () => {
  const [values, setValues] = useState({
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
})

const [pay,setPay] = React.useState(false);

const handleChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
   
}

const handleSubmit =e => {
    e.preventDefault();
    setPay(true);
    
};
console.log(pay);
  return (
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
  );
};

export default CreditCardForm;