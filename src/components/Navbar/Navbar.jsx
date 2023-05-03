import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <img src="/images/Logo.jpg" alt="logo-victoria-bacci" className='logo' />        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='item-navbar'>Inicio</Nav.Link>
            <Nav.Link href="#link" className='item-navbar'>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='item-navbar'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link1" className='item-navbar'>Link1</Nav.Link>
            <div >
              <div>
                <CartWidget />
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;