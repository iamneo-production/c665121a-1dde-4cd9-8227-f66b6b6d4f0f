import React, { useEffect, useState } from "react";
import axiosObject from "../../api/bootapi";
import "../styles/Appointments.css";
import NavbarUser from "./NavbarUser";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import star from "../assets/star.png"
const ViewSCReview = () => {

  const [data,setDate]= useState([
      {
        center_id: 1,
        userName: "User1",
        star: "3",
        experience: "good",
        givenDate: "2022-03-03",
      },
      {
        center_id: 2,
        userName: "User2",
        star: "5",
        experience: "excellent",
        givenDate: "2022-04-03",
      }
  ]);




  return (
    <>
      <NavbarUser />
      <div
        className="home-body"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="fixed-content">
          <Row xs={1} md={4} className="g-4">
            {data.map((val) => {
              return (
                 <Col style={{ padding: "2rem" }}>

                    <Card style={{backgroundColor:"#EFFFFD",borderRadius:"10%",boxShadow: "7px 7px 7px #9E9E9E",borderColor:"white"}}>
                      <div style={{display:'flex',marginLeft:'40%'}}>
                        <Card.Title style={{fontSize:40}} >{val.star}</Card.Title>
                        <Card.Img variant="top" src={star} style={{height:40,width:40}}/>
                      </div>
                      <Card.Body>
                        <Card.Title>{val.userName}</Card.Title>
                        <Card.Text>{val.experience}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">{val.givenDate}</small>
                      </Card.Footer>
                    </Card>

                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default ViewSCReview;
