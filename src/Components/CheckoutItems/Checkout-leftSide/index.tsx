import Input from '../../UI/Input'
import style from '../style.module.css'

const CheckoutLeftSide =() =>{
    return(
            <div className={style['checkout-leftSide']}>
                <h3>CHECKOUT</h3>
                <div className={style['checkout-billingDetails']}>
                    <span>Billing Details</span>
                    <div className={style['flex-input']}>
                        <Input label={'Name'} placeHolder={'Alexei Ward'} type='text' inputName='input' name='name' />
                        <Input label={'Email Address'} placeHolder={'alexei@mail.com'} type='email' isRequire={true} inputName='input' name='email' />
                    </div>
                    <p style={{ paddingTop: "8px" }}>
                        <Input label={'Phone Number'} placeHolder={'+1 202-555-0136'} type='text' inputName='input' name='phone' />
                    </p>
                </div>
                <div className={style['checkout-shippingInfo']}>
                    <span>Shipping Info</span>
                    <Input label={'Address'} placeHolder={'1137 Williams Avenue'} type='text' inputName='input-100w' name='address' />
                    <div className={style['flex-input']}>
                        <Input label={'ZIP Code'} placeHolder={'10001'} type='number' inputName='input' name='zip' />
                        <Input label={'City'} placeHolder={'New York'} type='text' inputName='input' name='city' />
                    </div>
                    <p style={{ paddingTop: '8px' }}>
                        <Input label={'Country'} placeHolder={'United States'} type='text' inputName='input' name='country' />
                    </p>
                </div>
                <div className={style['checkout-paymentDetails']}>
                    <span>Payment Details</span>
                    <div className={style['payment-method']}>
                        <h6>Payment Method</h6>
                        <div className={style['payment-flex']}>
                            <Input label={'e-Money'} id='pay-emoney' name='payment' type='radio' />
                            <Input label={"Cash on Delivery"} id='pay-cash' name='payment' type='radio' />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CheckoutLeftSide