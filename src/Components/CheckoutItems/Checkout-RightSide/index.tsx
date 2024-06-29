
import Button from '../../UI/Button'
import style from '../style.module.css'
import { Products } from '../../../Static/type';
import OrderModal from '../OrderModal';
import { useState } from 'react';

type Props={
    total:string | undefined,
    grandTotal:string | undefined,
    cartData:Products[]
}
const CheckoutRightSide =({total,grandTotal,cartData} : Props) =>{
    const[click,setClick] = useState(false);
    const handleClick =() =>{
        setClick(prev => !prev)
    }
    console.log(cartData[0]?.name.split(" "))
    console.log(cartData[1]?.name.split(" "))
    return(
        <div className={style['checkout-rightSide']}>
            <div className={style['checkoutList']}>
                <h4>Summary</h4>
                <ul className={style['list']}>
                    {cartData.map((item) => (
                            <li key={item.id} className={style['checkoutListItem']}>
                                <img src={`http://${window.location.host}/${item.image.desktop}`} alt={item.name} />
                                <div className={style['checkout-productDetails']}>
                                    <div className={style['checkout-item-price']}>
                                        <h6>{item.name.split(' ').slice(0,-1).join(" ")}</h6>
                                        <span>${item.price >=1000? (item.price/1000).toFixed(3).replace(".",',') : item.price}</span>
                                    </div>
                                    <div className={style["checkout-productsCount"]}>
                                        <span>x{item.count}</span>
                                    </div>
                                </div>
                            </li>
                    ))}
                </ul>
                <div className={style['cartPriceCalculate']}>
                    <div>
                        <span>Total</span>
                        <p>$ {total}</p>
                    </div>
                    <div>
                        <span>Shipping</span>
                        <p>$ 50</p>
                    </div>
                    <div>
                        <span>VAT (INCLUDED)</span>
                        <p>$ 1,079</p>
                    </div>
                    <div style={{paddingTop:"16px"}}>
                        <span>GRAND TOTAL</span>
                        <p className={style.grandParagraph}>$ {grandTotal}</p>
                    </div>
                </div>
                <div className={style['checkout-button']} style={{width:'100%'}}>
                    <Button
                        buttonType='submit'
                        text={"CONTINUE & PAY"}
                        handleClick={handleClick}
                        buttonName={'btn-primary-100'}
                    />
                </div>
                {click && (
                    <div className={style['orderModal']}>
                        <OrderModal
                            grandTotal={grandTotal}
                            cartData={cartData}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
export default CheckoutRightSide