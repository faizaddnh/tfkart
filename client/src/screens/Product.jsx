import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import './Product.css'
import { Store } from '../Store';

function Product(props) {

    const [product, setProduct] = useState([]);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [customerSize, setCustomerSize] = useState("");
    const [customerColor, setCustomerColor] = useState("");
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




    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;



    let params = useParams();
    const productId = params.id;

    const addToCart = async (id) => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/product/${id}`);
        console.log(data)

        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...data, quantity, customerSize, customerColor },
        });
        navigate("/cart");
    };


    useEffect(() => {
        axios.get('/api/product/' + productId).then(res => {
            setProduct([res.data])
        })
            .catch((error) => {
                console.log(error)
            })
    }, []);
 

    //review push

    const reviewSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(`/api/product/${productId}/reviews`, { rating, comment, name, image });
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    const chooseSize = item => {
        setCustomerSize(item.name);
    }

    const chooseColor = color => {
        setCustomerColor(color.hex);
    }

    const uploadFileHandler = async (e, forImages) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('file', file);
        try {
            //dispatch({ type: 'UPLOAD_REQUEST' });
            const { data } = await axios.post('/api/upload', bodyFormData);
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

                    {product.map((items) => (
                        <div className='grid-prdct'>

                            <img className='prdct-img' src={items.image} alt="" />
                            <div className='prdct-line'>
                                <h1> Name: {items.name}</h1>
                                <Rating rating={items.rating} numReviews={items.numReviews} />
                                <div> Price: ₹ {items.price}</div>
                                <div>Brand: {items.brand}</div>
                                <div> Category: {items.category}</div>
                                <div> Description: {items.description}</div>
                                <div>Pack Of: {items.pack}</div>
                                <div>Style: {items.style}</div>
                                <div>Weight: {items.weight}</div>
                                <div>Length: {items.length}</div>
                                <div>Ideal For: {items.ideal}</div>

                                <div>Size:
                                    <div className='customer-size-grid'>
                                        {items.sizeList.map((item) => (
                                            <button key={item.name} className="customer-size" onClick={() => chooseSize(item)}> {item.name} </button>
                                        ))}
                                    </div>
                                </div>

                                <div>colors:
                                    <div className='customer-size-grid customer-twitter-picker'>
                                        {items.colors.map((color) => (
                                            <button className="customer-colour" style={{ background: color.hex }} onClick={() => chooseColor(color)}> </button>
                                        ))}
                                    </div>
                                </div>
                                

                                <div>Sleeve: {items.sleeve}</div>
                                <div>Type: {items.type}</div>
                                <div>Return Policy: {items.returnPolicy}</div>

                                <button onClick={() => { addToCart(items._id) }} className='button' >ADD-TO-CART</button>
                            </div>
                        </div>

                    ))}
                </div>
            </section>


            <section>
                <h1 className='prdct-detail'>COMMENTS</h1>
                <div>
                    {product.map((items) => (
                        <div>{items.reviews.map((comment) => (
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

                    <input type="text"
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