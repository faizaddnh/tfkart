import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import './Product.css'

function Product(props) {

    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const navigate = useNavigate();

    const reducer = (state, action) => {
        switch (action.type) {
            case 'REFRESH_PRODUCT':
                return { ...state, product: action.payload };
            case 'CREATE_REQUEST':
                return { ...state, loadingCreateReview: true };
            case 'CREATE_SUCCESS':
                return { ...state, loadingCreateReview: false };
            case 'CREATE_FAIL':
                return { ...state, loadingCreateReview: false };
            case 'FETCH_REQUEST':
                return { ...state, loading: true };
            case 'FETCH_SUCCESS':
                return { ...state, product: action.payload, loading: false };
            case 'FETCH_FAIL':
                return { ...state, loading: false, error: action.payload };
            default:
                return state;
        }
    };


    let params = useParams();
    const productId = params.id;

    useEffect(() => {
        axios.get('http://localhost:7000/api/product/' + productId).then(res => {
            setData([res.data])
            console.log(data)

        })
            .catch((error) => {
                console.log(error)
            })
    }, []);


    //review push

    const reviewSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(`http://localhost:7000/api/product/${productId}/reviews`, { rating, comment, name, image });
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    const uploadFileHandler = async (e, forImages) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('file', file);
        try {
            //dispatch({ type: 'UPLOAD_REQUEST' });
            const { data } = await axios.post('http://localhost:7000/api/upload', bodyFormData);
            //dispatch({ type: 'UPLOAD_SUCCESS' });
            setImage(data.secure_url);
        } catch (err) {
            console.log(err.message);
        }
    };


    return (
        <div>
            <section>
                <h1 className='prdct-detail'>PRODUCT DETAILS</h1>
                <div>

                    {data.map((product) => (
                        <div className='grid-prdct'>

                            <img className='prdct-img' src={product.image} alt="" />
                            <div className='prdct-line'>
                                <h1> Name: {product.name}</h1>
                                <Rating rating={product.rating} numReviews={product.numReviews} />
                                <div> Price: ₹ {product.price}</div>
                                <div>Brand: {product.brand}</div>
                                <div> Category: {product.category}</div>
                                <div> Description: {product.description}</div>
                            </div>

                        </div>

                    ))}
                </div>
            </section>


            <section>
                <h1 className='prdct-detail'>COMMENTS</h1>
                <div>
                    {data.map((product) => (
                        <div>{product.reviews.map((comment) => (
                            <div className='boder'>
                                <div className='flex'>
                                    <img className='img-comment' src={comment.image} alt="" />
                                    <div className='margin'>{comment.name}</div>
                                </div>
                                <div className='margin'>{comment.comment}</div>
                            </div>
                        ))}
                        </div>

                    ))}


                </div>
            </section>




            <section className='address-center'>
                <h1 className='prdct-detail'>YOUR COMMENT</h1>
                <form onSubmit={reviewSubmit} className='address-form' >
                    <input type="text"
                        placeholder='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} required /> <br /> <br />

                    <input type="hidden"
                        placeholder='choose an image file...... '
                        value={image}
                        onChange={(e) => setImage(e.target.value)} />

                    <div id='file'>
                        <input type="file"
                            onChange={uploadFileHandler} />
                    </div>



                    <select name="rating" placeholder='give a rating' value={rating} onChange={(e) => setRating(e.target.value)} required >
                        <option value="">give a rating.....</option>
                        <option value="1">1- Poor</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very good</option>
                        <option value="5">5- Excelent</option>
                    </select>
                    <br /><br />

                    <textarea type="text"
                        placeholder='Your Comment.....'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)} required /> <br /> <br />



                    <button className='button' type='submit' >Post cmnt</button>

                </form>
            </section>



        </div>
    );
}

export default Product;