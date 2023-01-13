import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidjet from './CartWidjet';
import {Link} from 'react-router-dom';


function MiNavbar() {
  return (
    
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="#home">MANOR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
      
            <NavDropdown title="HOMBRES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#ropaH">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="zapatosH">Zapatos</NavDropdown.Item>
              <NavDropdown.Item href="accesoriosH">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#saleH">Sale</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="MUJERES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#ropaM">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="#zapatosM">Zapatos</NavDropdown.Item>
              <NavDropdown.Item href="#accesoriosM">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#saleM">Sale</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="NIÑOS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="ropaNM">Ropa para niñas</NavDropdown.Item>
              <NavDropdown.Item href="#ropaNV">Ropa para niños</NavDropdown.Item>
              <NavDropdown.Item href="zapatosNM">Zapatos para niñas</NavDropdown.Item>
              <NavDropdown.Item href="zapatosNV">Zapatos para niños</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#saleN">Sale</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
          <Nav>
          <Nav.Link as={Link} to="cart"><CartWidjet /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MiNavbar;