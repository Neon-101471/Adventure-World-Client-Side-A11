import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
                <Container>
                    <Navbar.Brand href="#home">Adventure World</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {
                            user.email ?
                                <Nav.Link as={Link} to="/add-place" className="text-info">Add Place</Nav.Link> :
                                ''
                        }
                        {
                            user?.email ?
                                <Nav.Link as={Link} to="/manage-services" className="text-danger">Manage Services</Nav.Link> :
                                ''
                        }
                        {
                            user?.email ?
                                <Nav.Link as={Link} to="/manage-orders" className="text-warning">Manage Orders</Nav.Link> :
                                ''
                        }

                        {
                            user?.email ?
                                <button onClick={logOut} className="btn btn-primary mx-2">Logout</button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;