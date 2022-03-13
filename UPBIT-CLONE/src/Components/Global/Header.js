import React from "react";
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return(
<Navbar style={{backgroundColor:'rgb(255, 215, 0)'}}  expand="lg">
<Container>
<Navbar.Brand href="/home">
        <img
          src="/3.jpeg"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      KuoCoin
      </Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href='/trade'>거래소</Nav.Link>
      <Nav.Link href='/explorer'>Kuo Explorer</Nav.Link>
      <Nav.Link href='https://www.blockmedia.co.kr/'>Topic</Nav.Link>
      <Nav.Link href='login'>Login</Nav.Link>
    </Nav>
</Container>
</Navbar>
  )
}

export default Header;
