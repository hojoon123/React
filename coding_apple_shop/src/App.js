import './App.module.css';
import { Navbar, Nav, Container, Row, Button } from 'react-bootstrap';
import { useState } from 'react';
import { shoes_data } from './components/data';
import { ShoesItem } from './components/ShoesItem.js';
import { Detail } from './routes/Detail.js';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(shoes_data)
  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">apple_shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="detail">detail</Nav.Link>
            <Nav.Link href="Cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className='main-bg'>
        <img src={process.env.PUBLIC_URL + '/test_images/bg_image.png'}></img>
      </div>
      <Button on onClick={ () => {
        //ajax 쏘는 법 1. XMLHttpRequest(옛날) 2. fetch()(요즘) 3. axios(외부)
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((e)=>{
        console.log(e.data)
        let copy = [...shoes, ...e.data];
        setShoes(copy);
      })
      .catch(()=>{
        console.log('실패함 ㅅㄱ')
      })
      }}></Button>

      <Routes>
        <Route path="/" element={
          <>
            <Container>
              <Row>
                {shoes.map((shoe) => (
                  <ShoesItem
                    shoe_data = {shoe}
                  />
                ))}
              </Row>
            </Container>
          </>
        } />
        <Route path="/detail/:id" element={ <Detail shoe = {shoes} /> } />
        <Route path="/Cart" element={ <div>카트페이지임</div> } />
      </Routes>

    </div>
  );
}

export default App;
