import { useEffect, useState } from 'react';
import style from './style.module.css';
import Button from '../UI/Button';
import CheckoutRightSide from './Checkout-RightSide';
import CheckoutLeftSide from './Checkout-leftSide';
import { Spinner } from 'react-bootstrap';
import { useAppselectore } from '../../Store';
import { useForm } from "react-hook-form";
import Alert from 'react-bootstrap/Alert';

export type FormForPost = {
  name: string;
  email: string;
  phone?: string;
  address: string;
  zip?: string;
  city: string;
  country: string;
  paymentOption: string;
  emoneyNumber?: string;
  emoneyPin?: string;
};

const CheckoutItems = () => {
  const { cartData } = useAppselectore(state => state.cart);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState<string>('');
  const [grandTotal, setGrandTotal] = useState<string>('');
  const [check, setCheck] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormForPost>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
    const totalAmount = cartData.reduce((acc, item) => acc + (item.count as number) * item.price, 0);
    setTotal(totalAmount >= 1000 ? (totalAmount / 1000).toFixed(3).replace('.', ',') : totalAmount.toString());
    setGrandTotal(totalAmount + 50 >= 1000 ? ((totalAmount + 50) / 1000).toFixed(3).replace('.', ',') : (totalAmount + 50).toString());
  }, [cartData]);


  const onSubmit = (data:FormForPost) => {
    console.log(data)
    if(cartData.length >0){
      console.log(cartData,'cartData')
      setCheck(prev => !prev)
    }
    else{
      setShow(true);
    }
  };

  return (
    <div className={style['container']}>
      {loading && (
        <div className={style.spinnerWrapper}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {show && (
        <div className={style.alertWrapper}>
          <Alert variant="danger" onClose={() => setShow(false)} >
            <Alert.Heading>Cart is Empty!</Alert.Heading>
            <p>
              Your shopping cart is empty. Please add items to your cart before proceeding to checkout.
              Go back to the products page and select the items you wish to purchase.
              <div style={{paddingTop:"15px"}}>
                <Button 
                      text={'Click There !'} 
                      isLink={true} 
                      path={cartData.length>0? `/products/category/${cartData.at(-1)?.category}` : '/'}
                      buttonName={'active-gray'} 
                />
              </div>
            </p>
          </Alert>
        </div>
      )}
      <div className={style.goBackTag}>
        <Button 
          text={'Go Back'} 
          isLink={true} 
          path={cartData.length>0? `/products/category/${cartData.at(-1)?.category}` : '/'}
          buttonName={'active-gray'} />
      </div>
      <form className={style['checkout-container']} onSubmit={handleSubmit(onSubmit)}>
        <CheckoutLeftSide 
            register={register}
            errors={errors} 
        />
        {!loading && (
          <CheckoutRightSide
            total={total}
            grandTotal={grandTotal}
            cartData={cartData}
            check={check}
          />
        )}
      </form>
    </div>
  );
};

export default CheckoutItems;
