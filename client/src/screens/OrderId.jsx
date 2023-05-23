import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Store } from '../Store';
import axios from 'axios';

function OrderId(props) {
    const [order, setOrder] = useState([]);

    const { state } = useContext(Store);
    const { userInfo } = state;

    const params = useParams();
    const { id: orderId } = params;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/orders/${orderId}`, {
                    headers: { authorization: `Bearer ${userInfo.token}` },
                });
                console.log(data);
                setOrder([data]);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [userInfo]);



    return (
        <div>
            <section>
                <div className='TimesTableWrap'>
                    {order.map((item) =>

                        <div >
                            <div className='heading'>Order of {item.shippingAddress.name}</div>

                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>IMAGE</th>
                                            <th>NAME</th>
                                            <th>QUANTITY</th>
                                            <th>PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.orderItems.map((order) => (
                                            <tr key={order._id}>
                                                <td><img className='img-cart' src={order.image} alt="" /></td>
                                                <td>{order.name}</td>
                                                <td>{order.quantity}</td>
                                                <td>{order.price}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className='sect'>
                                <h3>Order ID : {item._id}</h3>
                                <div className='grid'>
                                    <p>Item Price :</p>
                                    <p>₹ {item.itemsPrice}</p>
                                </div>
                                <div className='grid'>
                                    <p>Shipping Price :</p>
                                    <p>₹ {item.shippingPrice}</p>
                                </div>
                                <div className='grid'>
                                    <p>Tax Price:</p>
                                    <p>₹ {item.taxPrice}</p>
                                </div>
                                <div className='grid'>
                                    <p>Total Price :</p>
                                    <p>₹ {item.totalPrice}</p>
                                </div>
                            </div>










                        </div>


                    )}

                </div>
            </section>

        </div>
    );
}

export default OrderId;



