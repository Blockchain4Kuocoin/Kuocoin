import React from "react";
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons';

const St = {
  Container: styled.span`
    display: block;
    margin-left: ${({ marginLeft }) => marginLeft || "8px"};
    font-weight: 600;
    font-size: 0.9rem;
    height: 20px;
    color: #ffb00b;
  `,
}

function Header() {
  return(
      <Navbar style={{backgroundColor:'#ffffff'}}  expand="lg">
        <Container>
          <Navbar.Brand href="/home">
              <img
                src="/kuoslogo.png"
                width="120"
                height="80"
                className="d-inline-block align-top"
              />{' '}
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href='/trade'><St.Container>거래소</St.Container></Nav.Link>
            <Nav.Link href='/explorer'><St.Container>Kuo Explorer</St.Container></Nav.Link>
            <Nav.Link href='https://www.blockmedia.co.kr/'><St.Container>Topic</St.Container></Nav.Link>
            {sessionStorage === null || sessionStorage.length === 0
            ? <>
            <Nav.Link href='/login'><St.Container>로그인</St.Container></Nav.Link>
            <Nav.Link href='/signup'><St.Container>회원가입</St.Container></Nav.Link>
            </>
            : <>
            <Nav.Link href='/' onClick={() => {sessionStorage.clear()}}><St.Container>로그아웃</St.Container></Nav.Link>
            <Nav.Link href='/navbar'><St.Container>마이페이지</St.Container></Nav.Link>
            </> 
            }
          </Nav>
        </Container>
      </Navbar>
    )
  }

export default Header;
