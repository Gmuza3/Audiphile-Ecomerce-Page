import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"
import Products from "../Pages/Products"
import SingleProduct from "../Pages/SingleProduct"
import Checkout from "../Pages/Checkout"

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
                <Route path="/product/checkout" element={<Checkout/>}/>
            </Routes>
        </div>
    )
}

export default Routers