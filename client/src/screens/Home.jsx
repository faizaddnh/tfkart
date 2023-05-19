import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import './Home.css';
import Rating from '../components/Rating';
import Carousel from './Carousel';

function Home(props) {
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
                console.log(result.data);
                setProduct(result.data);
            } catch (err) {
                console.log(err.data);
            }
        }
        fetchData();
    }, []);



    return (
        <div>
            <Carousel/>
            <section>
                <div className='grid-display'>
                    {product.map((item) => (
                        <div className='prdct-display'>
                            <Link className='link' to={'/product/' + item._id}>
                                
                                <img className='img-prdct' src={item.image} alt="" />
                                <div className='name'>{item.name}</div>
                                <div className='light-color'>{item.brand}</div>
                                <div className='price'> Price: ₹ {item.price}</div>
                                <Rating className='rating' rating={item.rating} numReviews={item.numReviews}/>
                            </Link>
                            <button className='button' onClick={() => { addToCart(item._id) }}>ADD-TO-CART</button>
                        </div>

                    ))}
                </div>
            </section>

        </div>
    );
}

export default Home;