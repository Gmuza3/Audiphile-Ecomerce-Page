import { Products } from '../../Static/type'
import style from '../CheckoutItems/style.module.css'

type Props={
    grandTotal:string | undefined,
    cartData:Products[]
}

const OrderModal =({grandTotal,cartData}:Props) =>{
    return(
        <div className={style['orderModal-zone']}>
            <div className={style.orderLogo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="32" fill="#D87D4A"/>
                    <path d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812" stroke="white" stroke-width="4"/>
                </svg>
            </div>
            <div className={style.orderTextZone}>
                <h3>THANK YOU FOR YOUR ORDER</h3>
                <span>You will receive an email confirmation shortly.</span>
            </div>
            <div className={style['order-container-wrapper']}>
                <ul className={style["orderList"]}>
                    {cartData?.map((item) =>{
                        return(
                            <li key={item.id} className={style['order-listItem']}>
                                <div className={style['order-leftSide']}>
                                    <div style={{width:"70%",display:'flex',alignItems:"center",gap:"16px"}}>
                                        <div className={style['order-imgZone']}>
                                            <img src={`http://${window.location.host}/${item.image.desktop}`} alt={item.name} />
                                        </div>
                                        <div className={style['order-leftSide-text']}>
                                            <h3>{item.name}</h3>
                                            <span>$ {item.price}</span>
                                        </div>
                                    </div>
                                    <div className={style['orderCount']}>
                                        <span>x{item.count}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className={style['order-rightSide']}>
                    <span>Grand total</span>
                    <p>$ {grandTotal}</p>
                </div>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    )
}

export default OrderModal