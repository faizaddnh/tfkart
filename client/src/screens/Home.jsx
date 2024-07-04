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
                    <div className='heading-1'>KIDDIEEES DISCOUNTS</div>
                    <div className='grid-display-1 '>

                        {product.filter(task => task.category === 'Toys').slice(0, 12).map((item) => (
                            <div className='prdct-display-1'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='discount'>  ₹{item.price}</div>
                                    <div className='price'>
                                        <span style={{ textDecoration: 'line-through' }}>
                                            ₹{item.discount}
                                        </span>{' '}
                                        <span style={{ color: 'green' }}>
                                            {Math.round(((item.discount - item.price) * 100) / item.discount)}% off
                                        </span>
                                    </div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>


            <section >
                <div>
                    <div className='heading-4'>HOT DEALS FOR YOU</div>
                    <div className='grid-display-2 '>

                        {product.filter(task => task.category === 'Bag').slice(0, 12).map((item) => (
                            <div className='prdct-display-4'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-2' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='discount'>  ₹{item.price}</div>
                                    <div className='price'>
                                        <span style={{ textDecoration: 'line-through' }}>
                                            ₹{item.discount}
                                        </span>{' '}
                                        <span style={{ color: 'green' }}>
                                            {Math.round(((item.discount - item.price) * 100) / item.discount)}% off
                                        </span>
                                    </div>
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
                                    <div className='discount'>  ₹{item.price}</div>
                                    <div className='price'>
                                        <span style={{ textDecoration: 'line-through' }}>
                                            ₹{item.discount}
                                        </span>{' '}
                                        <span style={{ color: 'green' }}>
                                            {Math.round(((item.discount - item.price) * 100) / item.discount)}% off
                                        </span>
                                    </div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <section >
                <div className='section-1'>
                    <div className='heading-1'>BACK TO SCHOOL DEALS</div>
                    <div className='grid-display-1 '>

                        {product.filter(task => task.category === 'school-items').slice(0, 12).map((item) => (
                            <div className='prdct-display-1'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='discount'>  ₹{item.price}</div>
                                    <div className='price'>
                                        <span style={{ textDecoration: 'line-through' }}>
                                            ₹{item.discount}
                                        </span>{' '}
                                        <span style={{ color: 'green' }}>
                                            {Math.round(((item.discount - item.price) * 100) / item.discount)}% off
                                        </span>
                                    </div>
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

                        {product.filter(task => task.category === 'Olive-Store').slice(0, 18).map((item) => (
                            <div className='prdct-display-1'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='discount'>  Just ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <section >
                <div className='section-1'>
                    <div className='heading-1'>SMELL 'N' SMILE DEALS</div>
                    <div className='grid-display-1 '>

                        {product.filter(task => task.category === 'Perfume').slice(0, 12).map((item) => (
                            <div className='prdct-display-1'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='discount'>  Just ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>


            <section>
                <div className='section-3'>
                    <div className='heading-3'>UNBEATABLE DEALS</div>
                    <div className='section'>
                        <div className='grid-display-1 '>
                            {product.filter(task => task.category === 'Fancy').slice(0, 18).map((item) => (
                                <div className='prdct-display-1'>
                                    <Link className='link' to={'/product/category/' + item._id}>
                                        <img className='img-prdct-1' src={item.image} alt="" />
                                        <div className='name-2'>{item.name}</div>
                                        <div className='discount'>  ₹{item.price}</div>
                                        <div className='price'>
                                            <span style={{ textDecoration: 'line-through' }}>
                                                ₹{item.discount}
                                            </span>{' '}
                                            <span style={{ color: 'green' }}>
                                            {Math.round(((item.discount - item.price) * 100) / item.discount)}% off
                                        </span>
                                        </div>
                                    </Link>

                                </div>

                            ))}
                        </div>
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
                                    <div className='discount'> Price ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <section >
                <div className='section-2'>
                    <div className='heading-1'>CLEANIEE DEAL</div>
                    <div className='grid-display-1 '>

                        {product.filter(task => task.category === 'Soap').slice(0, 18).map((item) => (
                            <div className='prdct-display-1'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='discount'>  Just ₹{item.price}</div>
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
                                        <div className='discount'> Price Just ₹{item.price}</div>
                                    </Link>

                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div className='section-2'>
                    <div className='heading-1'>BUDGET BUYS</div>
                    <div className='grid-display-1 '>

                        {product.filter(task => task.category === 'Beauty').slice(0, 18).map((item) => (
                            <div className='prdct-display-1'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='discount'>  Just ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <section >
                <div className='section-2'>
                    <div className='heading-1'>DECORATION OFFER</div>
                    <div className='grid-display-1 '>

                        {product.filter(task => task.category === 'Party-Decoration').slice(0, 12).map((item) => (
                            <div className='prdct-display-1'>
                                <Link className='link' to={'/product/category/' + item._id}>
                                    <img className='img-prdct-1' src={item.image} alt="" />
                                    <div className='name-2'>{item.name}</div>
                                    <div className='discount'>  Just ₹{item.price}</div>
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
                                    <div className='discount'>  Just ₹{item.price}</div>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;