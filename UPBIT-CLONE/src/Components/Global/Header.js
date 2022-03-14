import React from "react";
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {

  return(
    <Navbar style={{backgroundColor:'rgb(255, 215, 0)'}}  expand="lg">
    <Container>
    <Navbar.Brand href="/">
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
          {sessionStorage === null || sessionStorage.length === 0
          ? <>
          <Nav.Link href='/userlogin'>로그인</Nav.Link>
          <Nav.Link href='/usersignup'>회원가입</Nav.Link>
          </>
          : <>
          <Nav.Link href='/' onClick={() => {sessionStorage.clear()}}>로그아웃</Nav.Link>
          <Nav.Link href='/mypage'>마이페이지</Nav.Link>
          </> 
          }
        </Nav>
    </Container>
    </Navbar>
  )
}

export default Header;
