import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../style.css";

export default function Home () {
return (
    <div> 
        <Container className="gal-wrap">
            <Row>
              <Col className="grid" xs={6} md={4}>
                <img src={""} alt="image1" />
              </Col>
              <Col className="grid" xs={6} md={4}>
                <img src={""} alt="image1" />
              </Col><Col className="grid" xs={6} md={4}>
                <img src={""} alt="image1" />
              </Col><Col className="grid" xs={6} md={4}>
                <img src={""} alt="image1" />
              </Col><Col className="grid" xs={6} md={4}>
                <img src={""} alt="image1" />
              </Col><Col className="grid" xs={6} md={4}>
                <img src={""} alt="image1" />
              </Col>
            </Row>
        </Container>
    </div>
)
    
}
    
