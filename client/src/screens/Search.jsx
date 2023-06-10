import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Store } from '../Store';
import Rating from '../components/Rating';

function Search(props) {
    const [query, setQuery] = useState("");
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
            <div>
                <div className='address-center'>
                    <div className='address-form'>
                        <input
                            placeholder="Search for products, brands and more...."
                            onChange={event => setQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className='grid-ctgry'>
                    {product.filter(post => {
                        if (query === '') {
                            return post;
                        } else if (post.name.toLowerCase().includes(query.toLowerCase())
                            || post.category.toLowerCase().includes(query.toLowerCase())
                            || post.brand.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                        }
                    }).map((post, index) => (
                        <div key={index}>
                            <div className='ctgry-display'>
                                <Link className='link' to={'/product/' + post._id}>

                                    <img className='ctgry-prdct' src={post.image} alt="" />
                                    <div className='name-3'>{post.name}</div>
                                    <div className='name-2'>{post.brand}</div>
                                    <div className='price'> ₹: {post.price}</div>
                                    <Rating className='rating' rating={post.rating} numReviews={post.numReviews} />
                                </Link>
                                <button className='button' onClick={() => { addToCart(post._id) }}>ADD-TO-CART</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Search;