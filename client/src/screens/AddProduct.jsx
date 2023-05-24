import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

function AddProduct(props) {

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [countInStock, setCountInStock] = useState("");
    const [category, setCategory] = useState("");


    const navigate = useNavigate();


    const addprdct = async (e) => {
        e.preventDefault();
        try {
            const prdct = await axios.post('/api/product', { name, brand, image, price, description, countInStock, category });
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
                <div>
                    <form className='address-form' onSubmit={addprdct}>
                        <input type="text"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} required /> <br /> <br />

                        <input type="text"
                            placeholder='Brand'
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)} required /> <br /> <br />

                        <input type="text"
                            placeholder='do nothing here......'
                            value={image}
                            onChange={(e) => setImage(e.target.value)} required /> <br /> <br />

                        <div id='file'>
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

                        <input type="text"
                            placeholder='Category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)} required /> <br /> <br />

                        <input type="number"
                            placeholder='CountInStock'
                            value={countInStock}
                            onChange={(e) => setCountInStock(e.target.value)} required /> <br /> <br />

                        <button className='button' type='submit'>ADD-PRODUCT</button>

                    </form>
                </div>
            </section>

        </div>
    );
}

export default AddProduct;