import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Logo from './Logo'

const MenuNav = ({ isInHeader }) => {
/*     console.log (isInHeader); */

    return (
        <>
            <Navbar className={isInHeader
                            ? 'navBG' 
                            : 'footer'
                            } 
                            variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <Logo/>
                    </Navbar.Brand>
                </Container>

                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/' > Inicio </Nav.Link>
                            <Nav.Link as={Link} to='/item/tdy7HUjW98ppZKARGaP4'> Champú </Nav.Link>
                            <Nav.Link as={Link} to='/item/acondicionador' > Acondicionador </Nav.Link>
                            <Nav.Link as={Link} to='/item/mascarilla' > Mascarilla </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
                <Container> 
                    <Link as={Link} to='/cart'> <CartWidget/>  </Link>
                </Container>
        
            </Navbar>

            <section>
                <Outlet />
            </section>
        </>
    )
}
export default MenuNav 