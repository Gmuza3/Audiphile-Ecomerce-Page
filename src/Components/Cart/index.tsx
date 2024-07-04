import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppselectore } from "../../Store";
import { changeCartCount, removeAll, removeItem } from "../../Store/Cart";
import style from './style.module.css'
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

type Props={
    closeModal:() => void
}

const Cart = ({closeModal}:Props) => {
    const dispatch = useAppDispatch();
    const { cartData } = useAppselectore(state => state.cart);
    const[total,setTotal]=useState<string>();
    const navigate = useNavigate()
    
    const handleDecrease2 = useCallback((itemId:string) => {
        const item = cartData.find(item => item.id === itemId);
        if (item) {
            if(item.count  as number <= 0){
                dispatch(removeItem(itemId))
            }
            else{
                const newCount = ((item.count || 0) - 1);
                dispatch(changeCartCount({ data: item, newCount }));
            }
        }
    },[cartData, dispatch]);

    const handleIncrease2 = useCallback((itemId:string) => {
        const item = cartData.find(item => item.id === itemId);
        if (item) {
            const newCount = (item.count || 0) + 1;
            dispatch(changeCartCount({ data: item, newCount }));
        }
    },[cartData, dispatch]);

    useEffect(() =>{
        setTotal(() =>{
            const totalAmount = cartData.reduce((acc, item) => {
                return acc + (item.count as number) * item.price;
            }, 0);

            return totalAmount >= 1000
                ? (totalAmount / 1000).toFixed(3).replace('.', ',')
                : totalAmount.toString();
        })
        console.log("sxva",cartData)
    },[cartData])

    if(total === undefined){
        <div><p>not foudnd information</p></div>
    }
    
    return (
        <div className={style['cart-container']}>
                <div className={style['cart-containerHead']}>
                    <span>Cart({cartData.length})</span>
                    <Button
                        text={"Remove all"}
                        handleClick={() => {
                            dispatch(removeAll());
                            if(cartData.length <=0){
                                closeModal();
                            }
                        }
                        }
                        buttonName={'btn-remove-link'}
                    />
                </div>
                <ul className={style['cart-productsContainer']}>
                    {cartData.map((item) => (
                        <li key={item.id}>
                            <div className={style['cart-productDetails']}>
                                <img src={`http://${window.location.host}/${item.image.desktop}`} alt={item.name} />
                                <div className={style['cart-item-price']}>
                                    <h6>{item.name.split(' ').slice(0,-1).join(" ")}</h6>
                                    <span>$ {item.price >=1000? (item.price/1000).toFixed(3).replace(".",',') : item.price}</span>
                                </div>
                            </div>
                            <div className={style["product-commonZone"]}>
                                <div className={style.countZone}>
                                    <span className={style.decrease}  onClick={() => handleDecrease2(item.id)}>-</span>
                                    <input type="number" value={item.count} readOnly />
                                    <span className={style.increase}  onClick={() => handleIncrease2(item.id)}>+</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={style['cart-totalPrice']}>
                    <span>TOTAL</span>
                    <div><p>$ {total}</p></div>
                </div>
                <div className={style['cart-button']} onClick={() => closeModal()}>
                    <Button
                        text={"Checkout"}
                        handleClick={() => navigate('/products/checkout',{replace:true})}
                        buttonType="button"
                        buttonName={'btn-primary-100'}
                    />
                </div>
        </div>
    );
};

export default Cart;

