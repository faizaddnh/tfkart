import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import './Admin.css'
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';
import './Order.css';

function OrderHistory(props) {

  const [orders, setOrders] = useState([]);

  const { state } = useContext(Store);
  const { userInfo } = state;
  console.log(userInfo)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/api/orders/mine', { headers: { Authorization: `Bearer ${userInfo.token}` } });
        setOrders(result.data)
        console.log(result);
      } catch (err) {
        console.log(err.data)
      }
    }
    fetchData();
  }, [userInfo])

  return (
    <div>
      <section>

        <div className='TimesTableWrap'>
          <h1 >Order History</h1>
          <div className='center'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELVD</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.totalPrice.toFixed(2)}</td>
                    <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                    <td>
                      {order.isDelivered
                        ? order.deliveredAt.substring(0, 10)
                        : 'No'}
                    </td>
                    <td>
                      <button
                        className='button'
                        type="button"
                        variant="light"
                        onClick={() => {
                          navigate(`/order/${order._id}`);
                        }}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

        </div>
      </section>
    </div>
  );
}

export default OrderHistory;