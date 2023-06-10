import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';

function Shipping(props) {

    const [name, setName] = useState("");
    const [house, setHouse] = useState("");
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [mobile, setMobile] = useState("");

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo, cart: { shippingAddress }, } = state;
    const navigate = useNavigate();

    const saveAddress = (e) => {
        e.preventDefault();
        ctxDispatch({
            type: 'SAVE_SHIPPING_ADDRESS',
            payload: { name, house, address, pincode, district, city, mobile },
        });
        localStorage.setItem('shippingAddress', JSON.stringify({ name, house, address, pincode, district, city, mobile }));
        navigate('/placeorder');

    }


    return (
        <div>
            <section className='address-center'>
                <div>
                    <form className='address-form' onSubmit={saveAddress}>
                        <input type="text"
                            placeholder='Your Name....'
                            value={name}
                            onChange={(e) => setName(e.target.value)} required /> <br /> <br />

                        <input type="text"
                            placeholder='House Name....'
                            value={house}
                            onChange={(e) => setHouse(e.target.value)} required /> <br /> <br />

                        <input type="text"
                            placeholder='Address......'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} required /> <br /> <br />

                        <input type="text"
                            placeholder='City Name...'
                            value={city}
                            onChange={(e) => setCity(e.target.value)} required /> <br /> <br />

                        <input type="text"
                            placeholder='District...'
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)} required /> <br /> <br />

                        <input type="number"
                            placeholder='Pincode...'
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)} required /> <br /> <br />

                        <input type="number"
                            placeholder='Mobile...'
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)} required /> <br /> <br />

                        <button className='button' type='submit'>Continue...</button>

                    </form>
                </div>
            </section>
        </div>
    );
}

export default Shipping;