import react from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return(

<Navbar bg="light" expand="lg">
<Container>
  <Navbar.Brand>K U O K U O</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className="ml-auto">
      <Nav.Link>거래소</Nav.Link>
      <Nav.Link>Kuo Explorer</Nav.Link>
      <Nav.Link>Topic</Nav.Link>
      <Nav.Link>Login</Nav.Link>
    </Nav>
</Container>
</Navbar>

  )
}

export default Header;