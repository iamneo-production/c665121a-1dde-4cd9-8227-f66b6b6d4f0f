import React, { useEffect, useState } from "react";
import axiosObject from "../../api/bootapi";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import '../styles/Home.css';
import NavbarUser from './NavbarUser';


const HomeUser = () => {

  const throwDetails = (value)=>{
    localStorage.setItem("data",JSON.stringify(value));
  }
    const getAllCenters=()=>{
        axiosObject.get(`/viewAllCenter`).then(
            (response)=>{
              console.log("centers fetched");
              setCenters(response.data);
            },(error)=>{
              console.log(error);
            }
          );
    };
    useEffect(()=>{
    document.title= "watchService || Home"
    getAllCenters();
    },[]);
    const [centers,setCenters]=useState([
        {
            "id":1,
            "name": 'Fastrack Service',
            "mobile": '8767896543',
            "address": 'Chennai',
            "imageurl": 'https://m.media-amazon.com/images/I/717uqMkUwNL._UY445_.jpg',
           "email": 'fastrack@gmail.com',
            "details": 'fastrack service'
        }
    ]);

  const [filter,setFilter] = useState('');

  const SearchText = (event) =>{
    setFilter(event.target.value);
  }
  let dataSearch = centers.filter(item =>{
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
  )});
  return (
    <>
    <NavbarUser/>
    <div className="home-body"style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

        <Container className='text-center mt-4' style={{width:"40%"}}>
          <Form.Control  placeholder="Search" value = {filter} onChange={SearchText.bind(this)} />

        </Container>
        <div className="fixed-content">
        <Row>
        {dataSearch.map((center) => {<dataSearch key ={center.id}/>
          return (
            
            <Col style={{ padding: '2rem' }} >
                
              <Card style={{ width: '18rem',borderRadius:20 ,marginRight:5,marginLeft:5}}>
                    <Card.Img variant="top" src={center.imageurl} style={{ width: '10rem', height: '10rem',marginLeft:"20%",marginTop:10,borderRadius:"50%" }} />
                <Card.Body>
                  <Card.Title>{center.name}</Card.Title>
                  <Card.Text>
                    {center.address}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>PHONE : {center.mobile}</ListGroupItem>
                  <ListGroupItem>MAIL ID : {center.email}</ListGroupItem>
                  
                </ListGroup>

                <Card.Body style={{alignItems:"center"}}>
                <Link to="/user/Appointment"><button className="btn btn-success " onClick={()=>{throwDetails(center)}}>View</button></Link>
                </Card.Body>
              </Card>
             
            </Col>    
           )
        })}
        
      </Row>
      </div>
     
    </div>
    </>
  )
}

export default HomeUser;