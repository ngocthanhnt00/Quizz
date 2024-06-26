import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";


function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/*<Navbar.Brand href="#home">ReactJS</Navbar.Brand>*/}
                <NavLink to={`/`} className='navbar-brand'>Home</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={`/`} className='nav-link'>Home</NavLink>
                        <NavLink to={`/users`} className='nav-link'>User</NavLink>
                        <NavLink to={`/admin`} className='nav-link'>Admin</NavLink>
                        {/*<Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">User</Nav.Link>
                        <Nav.Link href="#link">Admin</Nav.Link>*/}

                    </Nav>
                    <Nav>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item >Login</NavDropdown.Item>
                            <NavDropdown.Item >
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item >Change Password</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;