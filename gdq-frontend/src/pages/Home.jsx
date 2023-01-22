import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import NewProduct from "./NewProduct";


export default function Home () {
return (
    <div> 
        <Container>
            <Row>
              <Col xs={6} md={4}>
                <img src={"gdq-frontend/src/assets/PhotosForCode/nike-pic.webp"} alt="image1" />
              </Col>
              <Col xs={6} md={4}>
                <img src={"../assets/PhotosForCode/PngItem_2111340.png"} alt="image2" />
              </Col>
              <Col xs={6} md={4}>
                <img src={"../assets/PhotosForCode/1. PngItem_1171479.png"} alt="image3" />
              </Col>
            </Row>
        </Container>
    </div>
)
    }
    
