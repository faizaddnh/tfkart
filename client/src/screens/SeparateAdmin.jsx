import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import './Admin.css'
import { Store } from '../Store';

function SeparateAdmin(props) {
    const [orders, setOrders] = useState([]);


    const { state } = useContext(Store);
  const { userInfo } = state;
  console.log(userInfo);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('/api/orders');
                setOrders(result.data)
                console.log(result);
            } catch (err) {
                console.log(err.data)
            }
        }
        fetchData();
    }, [])


    const removeItemHandler = async (_id)=>{
        try {
            await axios.delete(`/api/orders/${_id}`);
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    };
    return (
        <div>
            <section>
                <div >
                    {orders.map((item) =>

                        <div >
                            <div className='heading'>{item.shippingAddress.name}</div>
                            <div className='grid-2'>
                                <div className='boder'>
                                    <div> Name: {item.shippingAddress.name}</div>
                                    <div> Mobille: {item.shippingAddress.mobile}</div>
                                    <div> Address: {item.shippingAddress.address}</div>
                                    <div> City: {item.shippingAddress.city}</div>
                                    <div> District: {item.shippingAddress.district}</div>
                                    <div> Pincode: {item.shippingAddress.pincode}</div>
                                </div>
                                <div className='boder'>
                                    <div> Item Price: {item.itemsPrice}</div>
                                    <div> Shipping Charge: {item.shippingPrice}</div>
                                    <div> Tax: {item.taxPrice}</div>
                                    <h1>Total Price: {item.totalPrice}</h1>
                                </div>
                            </div>
                            <div>{item.orderItems.filter(task => task.user === userInfo._id).map((item) => (
                                <div className='boder'>
                                    <div className='grid-3'>
                                        <img className='img-cart' src={item.image} alt="" />
                                        <div>{item.name}</div>
                                        <div>{item.quantity}</div>
                                    </div>

                                </div>

                            ))}
                            </div>
                            <button className='button' onClick={() => removeItemHandler(item._id)}>DELETE</button>
                        </div>


                    )}

                </div>
            </section>
            
        </div>
    );
}

export default SeparateAdmin;