import React from "react";
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return(
<Navbar style={{backgroundColor:'rgb(255, 255, 255)'}}  expand="lg">
<Container>
<Navbar.Brand href="/home">
        <img
          src="/kuoslogo.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      KuosCoin
      </Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href='/'>거래소</Nav.Link>
      <Nav.Link href='/explorer'>Kuo Explorer</Nav.Link>
      <Nav.Link href='https://www.blockmedia.co.kr/'>Topic</Nav.Link>
      <Nav.Link href='login'>Login</Nav.Link>
    </Nav>
</Container>
</Navbar>
  )
}

export default Header;
