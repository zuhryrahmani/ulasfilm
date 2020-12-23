import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
    <div>
      <Navbar className="navbar" light expand="md">
        <a href='/'><div className="logo"><h1><i class="fas fa-tape"></i>ReviewYuk</h1></div></a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap"></NavLink>
            </NavItem>
            <div className='search-box'><input className="search-input"
                type="text"
                placeholder="Search by movie..."
            /><Button><i class="fas fa-search"></i></Button></div>
          </Nav>
          <Button>Sign In</Button>
        </Collapse>
      </Navbar>
    </div>
    {/* <div className='logo'>
      <h1 style={{fontFamily: 'Comfortaa, cursive'}}><i class="fas fa-film"></i> ReviewYuk</h1>
      <h1 style={{fontFamily: 'Bebas Neue, cursive'}}><i class="fas fa-ticket-alt"></i> ReviewYuk</h1>
      <h1 style={{fontFamily: 'Viga, sans-serif'}}><i class="fas fa-tape"></i> ReviewYuk</h1>
    </div> */}
  </>
  );
}

export default NavbarHome;