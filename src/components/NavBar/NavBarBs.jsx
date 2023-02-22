import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


function NavBarBs() {
    return (
        <Navbar bg="warning" expand="lg">
            <Container>
                <Link to='/' className='w-100 gFontA'>FOBI Academy</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='w-100 gFontM' id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({isActive}) => isActive ? 'btn btn-dark' : 'btn btn-outline'} to='/categoria/cursos'>CURSOS</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'btn btn-dark' : 'btn btn-outline'} to='/categoria/seminarios'>SEMINARIOS</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'btn btn-dark' : 'btn btn-outline'} to='/categoria/talleres'>TALLERES</NavLink>
                        <NavLink to='*' className='d-flex flex-row ms-4 cartWidget'>
                            <CartWidget />1
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarBs