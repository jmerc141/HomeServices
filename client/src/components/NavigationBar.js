import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';

class NavigationBar extends Component{

	render(){
	return (
		<>
			<Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href="/">HomeServices</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav'/>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className="justify-content-end" style={{width:"100%"}}>
							<Nav.Link as={Link} to="/register">Register</Nav.Link>
							<Nav.Link as={Link} to="/login">Login</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>

		</>
		);
	}
}

export default NavigationBar;