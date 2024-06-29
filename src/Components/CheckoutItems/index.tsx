import { useEffect, useState } from 'react'
import style from './style.module.css'
import { useAppselectore } from '../../Store'
import Button from '../UI/Button'
import CheckoutRightSide from './Checkout-RightSide'
import CheckoutLeftSide from './Checkout-leftSide'
import { Spinner } from 'react-bootstrap'

const CheckoutItems = () => {
    const {cartData} = useAppselectore(state => state.cart);
    const[loading,setLoading] = useState(false)
    const[total,setTotal]=useState<string>();
    const[grandTotal,setGrandTotal]=useState<string>();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])
    useEffect(() =>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false)
        },700)
        setTotal(() =>{
            const totalAmount = cartData.reduce((acc, item) => {
                return acc + (item.count as number) * item.price;
            }, 0);

            return totalAmount >= 1000
                ? (totalAmount / 1000).toFixed(3).replace('.', ',')
                : totalAmount.toString();
        });
        setGrandTotal(() =>{
            const totalAmount = cartData.reduce((acc, item) => {
                return acc + (item.count as number) * item.price +50;
            }, 0);

            return totalAmount >= 1000
                ? (totalAmount / 1000).toFixed(3).replace('.', ',')
                : totalAmount.toString();
        });
        console.log("sxva",cartData)
    },[cartData])
    console.log(cartData)
    return (
        <div className={style['container']}>
            {loading  && (
                 <div className={style.spinnerWrapper}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            <div className={style.goBackTag}>
                <Button
                    text={"Go Back"}
                    isLink={true}
                    path='/'
                    buttonName={'active-gray'}
                />
            </div>
            <div className={style['checkout-container']}>
                <CheckoutLeftSide/>
            {!loading && (
                <CheckoutRightSide
                    total={total}
                    grandTotal={grandTotal}
                    cartData={cartData}
                />
            )}
            </div>
        </div>
    )
}

export default CheckoutItems;
