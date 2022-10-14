import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Inicio from '../inicio';
import SobreMi from '../sobre-mi';
import Contacto from '../contacto';
import MenuNav from '../NavBar';
import Cart from '../cart/CartWidget';

function Header () {
    return (
        <div className="">

        <header>
            <BrowserRouter>
                <Routes basename={process.env.PUBLIC_URL}>
                    <Route path='/' element={ <MenuNav />} />
                    {/* <Route index element={ <Inicio />} /> */}
                    <Route path='inicio' element={ <Inicio /> } />
                    <Route path='sobre-mi' element={ <SobreMi /> } />
                    <Route path='contacto' element={ <Contacto /> } />
            
                    <Route path='CartWidget' element={ <Cart /> } />
                    <Route path='*' element={ <Navigate replace to="/"/> }/>
                </Routes>
            </BrowserRouter>
        
            </header>
        </div>
    );
}

export default Header;
