import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import './Home.css';
import Rating from '../components/Rating';

function AdminProductList(props) {

    const [product, setProduct] = useState([]);

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;
    const navigate = useNavigate();


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

    const deleteProduct = async(_id)=>{
        try {
            await axios.delete(`/api/product/${_id}`);
        } catch (err) {
            console.log(err)
        }
    };



    return (
        <div>
            <section>
                <div className='grid-display'>
                    {product.map((item) => (
                        <div className='prdct-display'>
                            <Link className='link' to={'/product/' + item._id}>

                                <img className='img-prdct' src={item.image} alt="" />
                                <div className='name'>{item.name}</div>
                                <div className='light-color'>{item.brand}</div>
                                <div className='price'> ₹: {item.price}</div>
                                <Rating className='rating' rating={item.rating} numReviews={item.numReviews} />
                            </Link>
                            <button className='button' onClick={() => { deleteProduct(item._id) }}>DELETE</button>
                        </div>

                    ))}
                </div>
            </section>
        </div>
    );
}

export default AdminProductList;