import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Routers from "../Routers"
import style from './style.module.css'
import cartStyle from '../Components/Cart/style.module.css';
import Cart from "../Components/Cart";
import { useEffect, useState } from "react";

const Layout = () =>{
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(prev => !prev);
    };
    const closeModal =() =>{
        setIsCartOpen(() =>{
               return  false
        })
    }
    useEffect(() =>{
        if(isCartOpen){
            document.body.classList.add(cartStyle['no-scroll'])
        }
        else{
            document.body.classList.remove(cartStyle['no-scroll'])
        }
    },[isCartOpen])
    return(
        <div className={style.zone}>
            <Header toggleCart={toggleCart}/>
            <Routers toggleCart={toggleCart}/>
            <Footer/>
            <div className={`${isCartOpen ? cartStyle['active'] : cartStyle['none']}`}>
                <Cart closeModal={closeModal}/>
            </div>
        </div>
    )
}
export default Layout