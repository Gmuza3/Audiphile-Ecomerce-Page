import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"
import Products from "../Pages/Products"
import SingleProduct from "../Pages/SingleProduct"
import Checkout from "../Pages/Checkout"
import Page404 from "../Pages/404Page"
import SignIn from "../Pages/SignIn/SignIn"

type Props={
    toggleCart:() => void
}

const Routers = ({toggleCart}:Props) =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products/category/:name" element={<Products/>} />
                <Route path="/product/:productName" element={<SingleProduct  toggleCart={toggleCart}/>} />
                <Route path="/products/checkout" element={<Checkout/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    )
}

export default Routers