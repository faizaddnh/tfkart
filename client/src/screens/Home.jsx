import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import './Home.css';
import Rating from '../components/Rating';
import Carousel from './Carousel';
import HomeCategory from '../categories/HomeCategory';

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
                setProduct(result.data);
            } catch (err) {
                console.log(err.data);
            }
        }
        fetchData();
    }, []);



    return (
        <div>
            <Carousel />
            <HomeCategory />


            <section >
                <div className='section-1'>
                    <div className='heading-1'>OLIVIAN DISCOUNTS</div>
                    <div className='grid-display-1 '>

                        {product.filter(task => task.category === 'Olive-Store').slice(0, 12).map((item) => (
                            <div className='prdct-display-1'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='price'> Just ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>


            <section >
                <div className='section-2'>
                    <div className='heading-1'>INDEPENDENCE OFFER</div>
                    <div className='grid-display-1 '>

                        {product.filter(task => task.category === 'Olive-Store').slice(14, 20).map((item) => (
                            <div className='prdct-display-1'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='price'> Just ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <section >
                <div className='section-1'>
                    <div className='heading-1'>FASHION HUNGAMA</div>
                    <div className='grid-display-1 '>

                        {product.filter(task => task.category === 'Fashion').slice(0, 12).map((item) => (
                            <div className='prdct-display-1'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='price'> Just ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>



            <section >
                <div className='section'>
                    <div className='heading-2'>Discounts for You</div>
                    <div className='grid-display-2 '>

                        {product.filter(task => task.category === 'Foot-wear').slice(0, 12).map((item) => (
                            <div className='prdct-display-2'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-2' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='price'>  ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>


            <section>
                <div>
                    <div className='heading-3'>ELECTRONICS DEALS</div>
                    <img className='big-sale' src="https://thumbs.dreamstime.com/b/concept-big-sale-people-silhouettes-men-women-shopping-online-big-smartphone-sale-inscription-tiny-people-concept-184147807.jpg" alt="" />
                </div>
                <div className='section'>
                    <div className='grid-display-1 '>
                        {product.filter(task => task.category === 'Electronics').slice(0, 18).map((item) => (
                            <div className='prdct-display-3'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='price'> Price: ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <section >
                <div className='section-2'>
                    <div className='heading-1'>BUDGET BUYS</div>
                    <div className='grid-display-1 '>

                        {product.filter(task => task.category === 'Beauty').slice(1, 19).map((item) => (
                            <div className='prdct-display-1'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='price'> Just ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <section >
                <div>
                    <div className='heading-4'>Discounts for You</div>
                    <div className='grid-display-2 '>

                        {product.filter(task => task.category === 'Perfume').slice(5, 17).map((item) => (
                            <div className='prdct-display-4'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-2' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='price-4'> Starting from ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className='section-3'>
                    <div className='heading-3'>MONSOON DHAMAKA</div>
                    <div className='section'>
                        <div className='grid-display-1 '>
                            {product.filter(task => task.category === 'umbrella').slice(0, 18).map((item) => (
                                <div className='prdct-display-3'>
                                    <Link className='link' to={'/product/category/' + item._id}>
                                        <img className='img-prdct-1' src={item.image} alt="" />
                                        <div className='name-2'>{item.name}</div>
                                        <div className='price'> Price: ₹{item.price}</div>
                                    </Link>

                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;