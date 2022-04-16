import React from "react";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const St = {
  Footer: styled.footer`
    font-family: 'Poor Story' ;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #549aff;
    padding: 20px 0;
    @media ${({ theme }) => theme.tablet} {
      display: none;
    }
  `,
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 20px;
    

    @media ${({ theme }) => theme.tablet} {
      display: block;
      max-width: 950px;
    }
  `,
  MainLink: styled.a`
    display: block;
    background-image: ${({ logo }) => `url(${logo})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    color: transparent;
    width: 130px;
    height: 60px;
  `,
  Description: styled.p`
    font-weight: 600;
    font-size: 1.1rem;
    color: #ddda76;
    height: 85px;
    margin-top: 10px;
  `,
  DescSpan: styled.span`
    display: block;
    height: 30px;
  `,
  ContactContainer: styled.address`
    display: flex;
    flex-direction: column;
  `,
  LinkTitle: styled.span`
    height: 25px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #ddda76;
  `,
  LinkTag: styled.a`
    display: flex;
    align-items: center;
    height: 30px;
    color: #ff5478;
    text-decoration: none;
  `,
  LinkSpan: styled.span`
    display: block;
    margin-left: ${({ marginLeft }) => marginLeft || "8px"};
    font-weight: 600;
    font-size: 1.1rem;
    height: 20px;
    color: #ddda76;
  `,
};

const Footer = () => {
  return (
    <St.Footer>
      <St.Container>
        <Navbar.Brand href="/home">
          <img
            src="/kuoslogo.png"
            width="120"
            height="80"
            className="d-inline-block align-top"
            href='/home'
          />
        </Navbar.Brand>

        <St.Description>
          <St.DescSpan>Team Name : Kuos</St.DescSpan>
          <St.DescSpan>Member : 서기영 김민욱 이혜진 박태현 이시은</St.DescSpan>
          <St.DescSpan>
            2022/02/24 START ~ 2022/03/31 END
          </St.DescSpan>
        </St.Description>
        <St.ContactContainer>
          <St.LinkTitle>Contact Me</St.LinkTitle>
          <ul>
            <li>
              <St.LinkTag href="https://github.com/Seongkyun-Yu/upbit-clone">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  title={"Github 아이콘"}
                />
                <St.LinkSpan>github.com/kuocoin</St.LinkSpan>
              </St.LinkTag>
            </li>
            <li>
              <St.LinkTag href="mailto:ysungkyun@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  title={"이메일 아이콘"}
                />
                <St.LinkSpan>kuos@gmail.com</St.LinkSpan>
              </St.LinkTag>
            </li>
          </ul>
        </St.ContactContainer>
      </St.Container>
    </St.Footer>
  );
};

export default Footer;
