import React, { useContext, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import ReactWhatsapp from 'react-whatsapp';
import './Placeorder.css';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return { ...state, loading: false };
    case 'CREATE_FAIL':
      return { ...state, loading: false };
    default:
      return state;
  }
};



function PlaceOrder(props) {


  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });





  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const {
    cart: { cartItems },
  } = state;

  const {
    cart: { shippingAddress },
  } = state;


  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.2345 => 123.23
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 500 ? round2(0) : round2(30);
  cart.taxPrice = round2(0.18 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice ;



  const placeOrderHandler = async (req, res) => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });

      const { data } = await axios.post('/api/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        });
      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate('/complete');
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      alert(err.message);
    }
  }




  return (
    <div>
      <section>
        <h1>preview order</h1>
        <div className='main-sect'>
          <div >
            <div className='sect'>
              <h3>shipping</h3>
              <p>Name: {shippingAddress.name}</p>
              <p>Mobile : {shippingAddress.mobile}</p>
              <p>Address : {shippingAddress.address}</p>
              <p>City : {shippingAddress.city}</p>
              <p>District : {shippingAddress.district}</p>
              <p>Pincode : {shippingAddress.pincode}</p>
            </div>
            <br /><br />
            <div>
              <div className='sect'>
                <h3>items</h3>
                <div>
                  {cartItems.map((item) => (
                    <div className='preview-grid'>
                      <img className='img-cart' src={item.image} alt="" />
                      <div>{item.name}</div>

                    </div>

                  ))}
                </div>

              </div>
            </div>
          </div>
          <div className='sect'>
            <h3>order summary</h3>
            <div className='grid'>
              <p>Item Price :</p>
              <p>₹ {cart.itemsPrice}</p>
            </div>
            <div className='grid'>
              <p>Shipping Price :</p>
              <p>₹ {cart.shippingPrice}</p>
            </div>
            <div className='grid'>
              <p>Tax Price:</p>
              <p>₹ {cart.taxPrice}</p>
            </div>
            <div className='grid'>
              <p>Total Price :</p>
              <p>₹ {cart.totalPrice}</p>
            </div>
            <button className="long-but" onClick={placeOrderHandler} >
              Pay (Cash On Delivery): ₹ {cart.totalPrice}
            </button>

          </div>
        </div>




      </section>


    </div>
  );
}

export default PlaceOrder;