import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import CartWidget from './CartWidget';
import Logo from './Logo'

const MenuNav = ({ isInHeader }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const catCollection = collection(db, 'categorias');
        getDocs(catCollection)
            .then((res) => {
                const categoriaDinamica = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setCategories(categoriaDinamica);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <Navbar className={isInHeader
                ? 'navBG'
                : 'footer'
            }
                variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <Logo />
                    </Navbar.Brand>
                </Container>

                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto upper">
                            {categories.map((categ) => (

                                <Nav.Link details={categ} key={categ.id} to={`/categoria/${categ.path}`} as={Link}> {categ.title} </Nav.Link>

                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>

                <Container>
                    <Link as={Link} to='/cart'> <CartWidget />  </Link>
                </Container>

            </Navbar>

            <section>
                <Outlet />
            </section>
        </>
    )
}
export default MenuNav 