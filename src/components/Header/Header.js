
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';







// import { Button } from 'bootstrap';



const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">MEDI-BOOKS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='m-2 text-decoration-none fw-semibold' to='/'>Home</Link>
                        <Link className='m-2 text-decoration-none fw-semibold' to='/course'>Course</Link>
                        <Link className='m-2 text-decoration-none fw-semibold' to='/blog'>Blog</Link>
                        <Link className='m-2 text-decoration-none fw-semibold' to='/faq'>FAQ</Link>
                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="course">Course</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Button className='m-1 ' variant="outline-info">LogIn</Button>
                        <Button className='m-1 ' variant="outline-info">Sign Up</Button>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>






        // <div className='bg-info ' >
        //     <Container className='d-flex justify-content-between px-4 '>

        //         <div>
        //             <h1 className='text-warning' >MEDI-<span>BOOKS</span></h1>
        //         </div>
        //         <div>
        //             <Link className='m-2' to='/'>Home</Link>
        //             <Link className='m-2' to='/course'>Course</Link>
        //             <Link className='m-2' to='/blog'>Blog</Link>
        //             <Link className='m-2' to='/faq'>FAQ</Link>
        //             <button className=''>Dark</button>
        //             <Link className='m-2' to='/faq'>Log in</Link>
        //             <Link className='m-2' to='/faq'>FAQ</Link>
        //         </div>

        //     </Container>
        // </div>
    );
};

export default Header;