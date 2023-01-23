import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import NewProduct from "./NewProduct";

import hoodie1 from "../assets/PhotosForCode/nike-pic.webp";
import hoodie2 from "../assets/PhotosForCode/PngItem_2111340.png";
import hoodie3 from "../assets/PhotosForCode/1. PngItem_1171479.png";
import hoodie4 from "../assets/PhotosForCode/PngItem_2111560.png";
import hoodie5 from "../assets/PhotosForCode/PngItem_2580686.png";
import hoodie6 from "../assets/PhotosForCode/PngItem_4755439.png";


export default function Home () {
return (
    <div> 
        <Container>
            <Row>
              <Col xs={6} md={4}>
                <img src={"../assets/PhotosForCode/nike-pic.webp"} alt="image1" />
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
    
