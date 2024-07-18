import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Routers from "../Routers";
import style from './style.module.css';
import cartStyle from '../Components/Cart/style.module.css';
import Cart from "../Components/Cart";
import { useEffect, useState } from "react";
import ProductBoxes from "../Components/ProductBoxes";
import { useLocation } from "react-router-dom";

const Layout = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const location = useLocation();

    const toggleCart = () => {
        setIsCartOpen(prev => !prev);
    };
    const toggleMenu = () => {
        setBurgerMenuOpen(prev => !prev);
    };
    const closeModal = () => {
        setIsCartOpen(() => false);
        setBurgerMenuOpen(() => false);
    };

    useEffect(() => {
        if (isCartOpen) {
            document.body.classList.add(cartStyle['no-scroll']);
        } else {
            document.body.classList.remove(cartStyle['no-scroll']);
        }
    }, [isCartOpen]);

    const isSignInPage = location.pathname === "/login" || location.pathname === '/register';

    return (
        <div className={style.zone}>
            {!isSignInPage && <Header toggleCart={toggleCart} toggleMenu={toggleMenu} />}
            {burgerMenuOpen && (
                <div className={style.menuOpen}>
                    <div className={style.menuResult}>
                        <ProductBoxes closeModal={closeModal} />
                    </div>
                </div>
            )}
            <Routers toggleCart={toggleCart} />
            {!isSignInPage && <Footer />}
            <div className={`${isCartOpen ? cartStyle['active'] : cartStyle['none']}`}>
                <Cart closeModal={closeModal} />
            </div>
        </div>
    );
};

export default Layout;
