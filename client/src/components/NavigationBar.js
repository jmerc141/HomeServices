import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';

class NavigationBar extends Component{


	logout(){
		localStorage.clear();
		window.location.reload(false);
	  }

	render(){
		
		let dynamicLogin, dynamicRegister, dynamicProfile;
		if(localStorage.getItem('user'))
		{
			dynamicProfile = <Nav.Link as={Link} to="/">Profile</Nav.Link>
			dynamicLogin = <Nav.Link as={Link} to="/" onClick={this.logout}>Logout</Nav.Link>
		}else{
			dynamicRegister =<Nav.Link as={Link} to="/register">Register</Nav.Link>
			dynamicLogin = <Nav.Link as={Link} to="/login">Login</Nav.Link>
		}
	return (
		<>
			<Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href="/">HomeServices</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav'/>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className="justify-content-end" style={{width:"100%"}}>
							{dynamicRegister}
							{dynamicProfile}
							{dynamicLogin}
					</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>

		</>
		);
	}
}

export default NavigationBar;