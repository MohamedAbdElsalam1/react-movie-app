import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg'
import './Navbar.css'

export const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <img src={logo} alt="image" className="logo"/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/pages" className="nav-link">pages</Link>
            <Link to="/movies" className="nav-link">movies</Link>
            <Link to="/tvShows" className="nav-link">tv shows</Link>
            <Link to="/celebs" className="nav-link">celebs</Link>
            <Link to="/blog" className="nav-link">blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar;
