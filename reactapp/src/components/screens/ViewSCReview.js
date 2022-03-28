import React, { useEffect, useState } from "react";
import axiosObject from "../../api/bootapi";
import "../styles/Appointments.css";
import NavbarUser from "./NavbarUser";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import data from "./data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
const ViewSCReview = () => {
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
            {data.rating.map((rating) => {
              return (
                <Col style={{ padding: "2rem" }}>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src="holder.js/100px160" />
                      <Card.Title>{rating.star}</Card.Title>
                      <Card.Body>
                        <Card.Title>{rating.userName}</Card.Title>
                        <Card.Text>{rating.experience}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">{rating.givenDate}</small>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
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
