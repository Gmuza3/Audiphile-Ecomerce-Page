import { useState } from 'react';
import Input from '../../UI/Input';
import style from '../style.module.css';
import logoImg from '../../../../public/assets/checkout/icon-cash-on-delivery.svg'
type FormForPost = {
    name: string;
    email: string;
    phone?: number; 
    address: string;
    zip?: number;
    city: string;
    country: string;
};
const CheckoutLeftSide = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState<number>();
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState<number>();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [paymentOption, setPaymentOption] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value))) {
            if (Number(value) >= 0) {
                setPhone(Number(value));
            }
        }
    };
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setAddress(e.target.value);
    const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value))) {
            if (Number(value) >= 0) {
                setZip(Number(value));
            }
        }
    };
    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCity(e.target.value);
    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCountry(e.target.value);
    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => 
        setPaymentOption(e.target.value);

    const [arr, setArr] = useState<FormForPost[]>([]); 

    const handleGela = () => {
        const newFormForPost: FormForPost = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            zip: zip,
            city: city,
            country: country
        };
        
        const uniqueArr = new Set([...arr.map(item => JSON.stringify(item)), JSON.stringify(newFormForPost)]);
        const uniqueFormForPosts = Array.from(uniqueArr).map(item => JSON.parse(item));

        setArr(uniqueFormForPosts); 
    };  

    console.log(arr);

    return (
        <div className={style['checkout-leftSide']}>
            <h3>CHECKOUT</h3>
            <div className={style['checkout-billingDetails']}>
                <span className={style.mainSpan}>Billing Details</span>
                <div className={style['flex-input']}>
                    <Input
                        label={'Name'}
                        placeHolder={'Alexei Ward'}
                        type='text'
                        inputName='input'
                        name='name'
                        value={name}
                        handleChange={handleNameChange}
                    />
                    <Input
                        label={'Email Address'}
                        placeHolder={'alexei@mail.com'}
                        type='email'
                        isRequire={true}
                        inputName='input'
                        name='email'
                        value={email}
                        handleChange={handleEmailChange}
                    />
                </div>
                <Input
                    label={'Phone Number'}
                    placeHolder={'+1 202-555-0136'}
                    type='number'
                    inputName='input'
                    name='phone'
                    value={phone}
                    handleChange={handlePhoneChange}
                />
            </div>
            <div className={style['checkout-shippingInfo']}>
                <span  className={style.mainSpan}>Shipping Info</span>
                <Input
                    label={'Address'}
                    placeHolder={'1137 Williams Avenue'}
                    type='text'
                    inputName='input-100w'
                    name='address'
                    value={address}
                    handleChange={handleAddressChange}
                />
                <div className={style['flex-input']}>
                    <Input
                        label={'ZIP Code'}
                        placeHolder={'10001'}
                        type='number'
                        inputName='input'
                        name='zip'
                        value={zip}
                        handleChange={handleZipChange}
                    />
                    <Input
                        label={'City'}
                        placeHolder={'New York'}
                        type='text'
                        inputName='input'
                        name='city'
                        value={city}
                        handleChange={handleCityChange}
                    />
                </div>
                <Input
                    label={'Country'}
                    placeHolder={'United States'}
                    type='text'
                    inputName='input'
                    name='country'
                    value={country}
                    handleChange={handleCountryChange}
                />
                <button type='button' onClick={handleGela}>add</button>
            </div>
            <div className={style['checkout-paymentDetails']}>
                <span  className={style.mainSpan}>Payment Details</span>
                <div className={style['payment-method']}>
                    <h6>Payment Method</h6>
                    <div className={style['payment-flex']}>
                        <Input
                            label={'e-Money'}
                            id='pay-emoney'
                            name='payment'
                            type='radio'
                            isChecked={paymentOption  === 'emoney'}
                            value='emoney'
                            handleChange={handlePaymentChange}
                        />
                        <Input
                            label={'Cash on Delivery'}
                            id='pay-cash'
                            name='payment'
                            type='radio'
                            isChecked={paymentOption === 'cash'}
                            value='cash'
                            handleChange={handlePaymentChange}
                        />
                    </div>
                </div>
                {paymentOption === 'cash' ? (
                    <footer className={style["checkout-leftContainer-footer"]}>
                        <div className={style.logoSide}>
                            <img src={logoImg} alt="" />
                        </div>
                        <div className={style.textSide}>
                            <span className={style.footerSpan}>
                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                            </span>
                        </div>
                    </footer>
                ):null
            }
               {paymentOption === 'emoney'? (
                    <footer className={style["checkout-leftContainer-footer"]}>
                        <div className={style['footer-flex']}>
                            <Input 
                                label="e-Money Number"
                                name='emoneyNumber'
                                placeHolder='238521993'
                                type='number'
                                isRequire
                                inputName='input'
                            />
                            <Input
                                label="e-Money PIN"
                                name='emoneyPin'
                                placeHolder='6891'
                                type='number'
                                isRequire
                                inputName='input'
                            />
                        </div>
                    </footer>
               ):null
            } 
            </div>
        </div>
    );
};

export default CheckoutLeftSide;
