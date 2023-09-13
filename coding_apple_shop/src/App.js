import './App.css';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import shoes_data from './components/data';
import { ShoesItem } from './components/ShoesItem.js';
import { Detail } from './routes/Detail.js';
import { Routes, Route } from 'react-router-dom';

function App() {

  let [shoes] = useState(shoes_data)
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
        <Route path="/detail" element={ <Detail shoe = {shoes[0]} /> } />
        <Route path="/Cart" element={ <div>카트페이지임</div> } />
      </Routes>

    </div>
  );
}

export default App;
