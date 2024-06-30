import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import '../screens/Home.css';
import './CategoryToys.css'
import Rating from '../components/Rating';

function CategoryBag(props) {
    const [product, setProduct] = useState([]);

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;
    const navigate = useNavigate();


    const addToCart = async (id) => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/product/${id}`);
        console.log(data)

        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...data, quantity },
        });
        navigate("/cart");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('/api/product');
                console.log(result);
                setProduct(result.data);
            } catch (err) {
                console.log(err.data);
            }
        }
        fetchData();
    }, []);



    return (
        <div>

            <section id='ctgry-main'>
                <div >
                    <div className='grid-ctgry'>
                        {product.filter(task => task.category === 'Bag').map((item) => (
                            <div className='ctgry-display'>
                                <Link className='link' to={'/product/' + item._id}>

                                    <img className='ctgry-prdct' src={item.image} alt="" />
                                    <div className='name-3'>{item.name}</div>
                                    <div className='light-color'>{item.brand}</div>
                                    <div className='discount'>  ₹{item.price}</div>
                                    <div className='price'>
                                        <span style={{ textDecoration: 'line-through' }}>
                                            ₹{item.discount}
                                        </span>{' '}
                                        <span style={{ color: 'green' }}>
                                            {Math.round(((item.discount - item.price) * 100) / item.discount)}% off
                                        </span>
                                    </div>
                                    <Rating className='rating' rating={item.rating} numReviews={item.numReviews} />
                                </Link>
                                <button className='button' onClick={() => { addToCart(item._id) }}>ADD-TO-CART</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CategoryBag;