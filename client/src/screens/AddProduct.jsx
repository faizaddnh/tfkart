import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';
import { Store } from '../Store';
import { TwitterPicker } from "react-color"
import { v4 as uuidv4 } from 'uuid';

function AddProduct(props) {

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [countInStock, setCountInStock] = useState("");
    const [category, setCategory] = useState("");
    const [returnPolicy, setReturnPolicy] = useState("");
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

    const [sizes] = useState([
        { name: 'S' },
        { name: 'M' },
        { name: 'L' },
        { name: 'XL' },
        { name: 'XXL' },
        { name: '1 Yr' },
        { name: '2 Yr' },
        { name: '3 Yr' },
        { name: '4-7 Yr' },
        { name: '8-11Yr' },
        { name: '12-15' },
        { name: '4' },
        { name: '5' },
        { name: '6' },
        { name: '7' },
        { name: '8' },
        { name: '9' },
        { name: '10' },
        { name: '11' },
        { name: '12' },
    ]);
    const [sizeList, setSizeList] = useState([]);
    const [colors, setColors] = useState([]);

    const chooseSize = sizeObject => {
        const filtered = sizeList.filter(size => size.name !== sizeObject.name);
        setSizeList([...filtered, sizeObject])

    }

    const deleteSize = name => {
        const filtered = sizeList.filter(size => size.name !== name);
        setSizeList(filtered);
    }
    console.log(sizeList);

    const saveColors = (color) => {
        const filtered = colors.filter(clr => clr.color !== color.hex);
        setColors([...filtered, color])
    }
    const deleteColor = color => {
        const filtered = colors.filter(clr => clr.hex !== color.hex);
        setColors([...filtered]);
    }
    console.log(colors);


    const addprdct = async (e) => {
        e.preventDefault();
        try {
            const prdct = await axios.post('/api/product',
                { name, brand, image, price, description, countInStock, category, returnPolicy, colors, sizeList, pack, style, weight, length, ideal, sleeve, type },
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

                        <div>
                            <label htmlFor="sizes" >choose sizes</label>
                            {sizes.length > 0 && <div className='size-grid' >
                                {sizes.map(size => (
                                    <div className='size' key={size.name} onClick={() => chooseSize(size)}>{size.name}</div>
                                ))}
                            </div>}
                        </div>
                        <br /><br />

                        <div >
                            {sizeList.length > 0 &&
                                <div>
                                    <div>selected sizes</div>
                                    <div className='size-grid' >
                                        {sizeList.map(size => (
                                            <div key={size.name} className="size" onClick={() => deleteSize(size.name)}>{size.name}</div>
                                        ))}
                                    </div>
                                </div>}
                        </div>
                        <br /><br />

                        <div >
                            <label htmlFor="colors" >choose colors</label>
                            <TwitterPicker className='twitter-picker' onChangeComplete={saveColors} />
                        </div>
                        <br /><br />


                        <div >
                            {colors.length > 0 &&
                                <div>
                                    <div>selected colors</div>
                                    <div className='size-grid twitter-picker'>
                                        {colors.map(color => (
                                            <div className="p-1" >
                                                <div className="colour" style={{ background: color.hex }} onClick={() => deleteColor(color)}></div></div>
                                        ))}
                                    </div>
                                </div>}
                        </div>
                        <br /><br />

                        <button className='button' type='submit'>ADD-PRODUCT</button>

                    </form>
                </div>

            </section>

        </div>
    );
}

export default AddProduct;