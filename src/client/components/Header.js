import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Route} from 'react-router-dom';
const Header = () => {
	return (
		<>
			<Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href="/">HomeServices</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav'/>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className="justify-content-end" style={{width:"100%"}}>
						<LinkContainer to="/register">
							<Nav.Link>Register</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/login">
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>

		</>
		);
}

export default Header;