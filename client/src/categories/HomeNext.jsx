import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Store } from '../Store';
import '../screens/Home.css';
import './CategoryToys.css'
import Rating from '../components/Rating';

function HomeNext(props) {
    const [data, setData] = useState([]);
    const [product, setProduct] = useState([]);

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;
    const navigate = useNavigate();


    let params = useParams();
    const productId = params.id;

    let category = data.map((fai) => fai.category)


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
        axios.get('https://gulfkart.azurewebsites.net/api/product/' + productId).then(res => {
            setData([res.data])
            console.log(data)

        })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://gulfkart.azurewebsites.net/api/product');
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
                        {product.filter(task => task.category === category[0]).map((item) => (
                            <div className='ctgry-display'>
                                <Link className='link' to={'/product/' + item._id}>

                                    <img className='ctgry-prdct' src={item.image} alt="" />
                                    <div className='name-3'>{item.name}</div>
                                    <div className='name-2'>{item.brand}</div>
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
                                <button onClick={() => { addToCart(item._id) }} className='button' >ADD-TO-CART</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeNext;