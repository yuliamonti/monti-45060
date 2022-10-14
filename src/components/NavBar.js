import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link} from 'react-router-dom';
import Cart from './cart/CartWidget'
import Logo from './header/Logo'

const MenuNav = () => {
    return (
        <>
            <Navbar className="navBG"variant="dark" expand="lg">
                <Container>
                    <Logo />
                </Container>

                <Container>
                    <Navbar.Brand as={Link} to='/'> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/' > Inicio </Nav.Link>
                            <Nav.Link as={Link} to='/sobre-mi' > Sobre Mi </Nav.Link>
                            <Nav.Link as={Link} to='/contacto' > Contacto </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

                <Container>
                    <Cart />
                </Container>
            </Navbar>
            



            <section> 
                <Outlet />
            </section>
        </>
    )
}
export default MenuNav 