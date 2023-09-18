import './Detail.module.css';
import { Col, Container, Button, Row } from 'react-bootstrap';
import { useEffect, useState, React } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { cleanup } from '@testing-library/react';

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`
let Box = styled.div`
    background : grey;
    padding : 20px;
    text-align: center;
`

function Detail(props){

    let {id} = useParams();
    let [count, setCount] = useState(0)
    let current_shoes = props.shoe.find((e) => e.id == id );
    let [alert, setAlert] = useState(true)

    // mount, update 시 코드실행
    // useEffect는 랜더링 이후에 실행
    // 바깥에 꺼내면 그냥 바로 실행임
    // 서버에서 데이터 가져올 때, 타이머등 여기다 넣음
    // index.js strickmode 제거하면 1번만 실행 이게 아마 디버깅 때메 2번씩 실행됨
    useEffect( () => {
        let timer = setTimeout(() => { setAlert(false)}, 2000)
        // return부터를 clean up function으로 명명 mount 실행 x / update, unmount 실행
        return () => {
            cleanup(timer)
        }
        // 보통 기존에 있던 걸 clean up 할 때 많이 사용
    },[count])
    // 끝에 [count] count가 바뀔 때만 update
    // 즉 [] 이렇게 비워두면 mount 때만 실행

    if (!current_shoes) {
        return <div>상품을 찾을 수 없습니다.</div>;
    }
    return (
        <Container>
            {
                alert == true
                ? <div className='alert alert-warning'>
                    2초 이내 구매시 할인!!
                  </div>
                : null
            }
            <Box>
            {count}
            <YellowBtn bg ="blue" onClick={() => {setCount(count+1); setAlert(true);}}>버튼</YellowBtn>
            <YellowBtn bg ="orange" >버튼</YellowBtn>
            </Box>
            <Row>
                <Col md = {6}>
                    <img src={current_shoes.imageSrc} alt="상품 이미지" className="img-fluid"></img>
                </Col>
                <Col md = {6} mt = {4} className='detail-col'>
                    <h4 pt = {5}>{current_shoes.title}</h4>
                    <p>{current_shoes.content}</p>
                    <p>{current_shoes.price}</p>
                    <Button variant="dark" className='detail-btn'>장바구니</Button>
                    <Button variant="dark">구매</Button>
                </Col>
            </Row>
        </Container>
    )
}

export { Detail };