import react from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";


const Footer = () => {
  return(
<footer className='foot'>
<Navbar bg="light" expand="lg">
<Container>
  <Navbar.Brand>Team</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className="ml-auto">
      <Nav.Link>서기영 이혜진 박태현 김민욱 이시은</Nav.Link>
    </Nav>
</Container>
</Navbar>
</footer>
  )
}

export default Footer;