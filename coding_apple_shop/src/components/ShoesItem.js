import { Col } from 'react-bootstrap';
import React from 'react';

function ShoesItem(props){
    return(
      <Col md = {4}>
        <img src= {`https://codingapple1.github.io/shop/shoes${props.shoe_data.id+1}.jpg`} alt="상품 이미지" className="img-fluid"></img>
        <h4>{props.shoe_data.title}</h4>
        <p>{props.shoe_data.content}</p>
        <p>{props.shoe_data.price}</p>
      </Col>
    )
}


export { ShoesItem };