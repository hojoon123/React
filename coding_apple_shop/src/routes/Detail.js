import './Detail.css';
import { Col, Container, Button, Row } from 'react-bootstrap';
import React from 'react';

function Detail(props){
    return (
        <Container>
            <Row>
                <Col md = {6}>
                    <img src={props.shoe.imageSrc} alt="상품 이미지" className="img-fluid"></img>
                </Col>
                <Col md = {6} mt = {4} className='detail-col'>
                    <h4 pt = {5}>{props.shoe.title}</h4>
                    <p>{props.shoe.content}</p>
                    <p>{props.shoe.price}</p>
                    <Button variant="dark" className='detail-btn'>장바구니</Button>
                    <Button variant="dark">구매</Button>
                </Col>
            </Row>
        </Container>
    )
}

export { Detail };