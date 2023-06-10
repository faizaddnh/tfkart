import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddProduct.css';
import { Store } from '../Store';

function UpdateProduct(props) {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [countInStock, setCountInStock] = useState("");
    const [category, setCategory] = useState("");
    const [returnPolicy, setReturnPolicy] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [pack, setPack] = useState("");
    const [style, setStyle] = useState("");
    const [weight, setWeight] = useState("");
    const [length, setLength] = useState("");
    const [ideal, setIdeal] = useState("");
    const [sleeve, setSleeve] = useState("");
    const [type, setType] = useState("");

    const { state } = useContext(Store);
    const { userInfo } = state;
    const navigate = useNavigate();


    let params = useParams();
    const productId = params.id;

    useEffect(() => {
        axios.get('/api/product/' + productId).then(res => {
            setName(data.name);
            setPrice(data.price);
            setImage(data.image);
            setCategory(data.category);
            setCountInStock(data.countInStock);
            setBrand(data.brand);
            setDescription(data.description);
            setReturnPolicy(data.returnPolicy);
            setColor(data.color);
            setSize(data.size);
            setPack(data.pack);
            setStyle(data.style);
            setWeight(data.weight);
            setLength(data.length);
            setIdeal(data.ideal);
            setSleeve(data.sleeve);
            setType(data.type);

        })
            .catch((error) => {
                console.log(error)
            })
    }, []);


    const updateprdct = async (e) => {
        e.preventDefault();
        try {
            const prdct = await axios.put('/api/product/' + productId,
                { name, brand, image, price, description, countInStock, category, returnPolicy, color, size, pack, style, weight, length, ideal, sleeve, type },
                {
                    headers: {
                        authorization: `Bearer ${userInfo.token}`,
                    },
                });
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    };



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

            <section className='address-center'>
                <h1>UPDATE PRODUCT</h1>
                <div>
                    <form className='address-form' onSubmit={updateprdct}>
                        <input type="text"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} required /> <br /> <br />

                        <input type="text"
                            placeholder='Brand'
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)} required /> <br /> <br />

                        <input type="hidden"
                            placeholder='Image-Address...'
                            value={image}
                            onChange={(e) => setImage(e.target.value)} required />

                        <div id='file'>
                            <label htmlFor="">image</label>
                            <input type="file"
                                onChange={uploadFileHandler} />
                        </div>

                        <input type="number"
                            placeholder='Price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} required /> <br /> <br />

                        <input type="text"
                            placeholder='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} required /> <br /> <br />

                        <select name="category" placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} required >
                            <option value="">Select a category......</option>
                            <option >school-items</option>
                            <option >Perfume</option>
                            <option >Soap</option>
                            <option >Electronics</option>
                            <option >Toys</option>
                            <option >Beauty</option>
                            <option >Stationary</option>
                            <option >Bag</option>
                            <option >umbrella</option>
                            <option >Fashion</option>
                            <option >Parda</option>
                            <option >Foot-wear</option>
                            <option >Other</option>
                        </select>
                        <br /><br />

                        <input type="number"
                            placeholder='CountInStock'
                            value={countInStock}
                            onChange={(e) => setCountInStock(e.target.value)} required /> <br /> <br />

                        <select name="returnPolicy" placeholder='Return policy' value={returnPolicy} onChange={(e) => setReturnPolicy(e.target.value)} required >
                            <option value="">Select a Return Policy......</option>
                            <option >One-day</option>
                            <option >No-return</option>
                        </select>
                        <br /><br />

                        <input type="text"
                            placeholder='Color'
                            value={color}
                            onChange={(e) => setColor(e.target.value)} /> <br /> <br />

                        <input type="text"
                            placeholder='Pack of'
                            value={pack}
                            onChange={(e) => setPack(e.target.value)} /> <br /> <br />

                        <input type="text"
                            placeholder='Style'
                            value={style}
                            onChange={(e) => setStyle(e.target.value)} /> <br /> <br />

                        <input type="text"
                            placeholder='Weight'
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)} /> <br /> <br />

                        <input type="text"
                            placeholder='Length'
                            value={length}
                            onChange={(e) => setLength(e.target.value)} /> <br /> <br />

                        <select name="ideal" placeholder='Ideal-For' value={ideal} onChange={(e) => setIdeal(e.target.value)}>
                            <option value="">Fit for whome......</option>
                            <option >boys</option>
                            <option >girls</option>
                            <option >men</option>
                            <option >women</option>
                        </select>
                        <br /><br />

                        <select name="sleeve" placeholder='sleeve' value={sleeve} onChange={(e) => setSleeve(e.target.value)}>
                            <option value="">Sleeve....</option>
                            <option >full sleeve</option>
                            <option >half sleeve</option>
                            <option >sleeve less</option>
                        </select>
                        <br /><br />

                        <input type="text"
                            placeholder='Type'
                            value={type}
                            onChange={(e) => setType(e.target.value)} /> <br /> <br />

                        <select name="size" placeholder='Size' value={size} onChange={(e) => setSize(e.target.value)}>
                            <option value="">Select a Size......</option>
                            <option >1-6 month</option>
                            <option >6-12 month</option>
                            <option >12-18 month</option>
                            <option >18-24 month</option>
                            <option >2-5 year</option>
                            <option >5-8 year</option>
                            <option >8-12 year</option>
                            <option >S</option>
                            <option >M</option>
                            <option >L</option>
                            <option >XL</option>
                            <option >XXL</option>
                            <option >4</option>
                            <option >6</option>
                            <option >7</option>
                            <option >8</option>
                            <option >9</option>
                            <option >10</option>
                            <option >12</option>
                            <option >Other</option>
                        </select>
                        <br /><br />

                        <button className='button' type='submit'>UPDATE-PRODUCT</button>

                    </form>
                </div>
            </section>

        </div>
    );
}

export default UpdateProduct;