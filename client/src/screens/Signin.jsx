import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Signin(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const doSignin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/user/signin', { email, password });

            localStorage.setItem('userInfo', JSON.stringify(data));
            console.log('login success');          
            navigate(redirect || '/');
            window.location.reload();
        } catch (err) {
            alert(err.message);
        }
    };

    const goToSignup = () => {
        navigate('/signup')
    }



    return (
        <div>
            <section className='address-center'>
                <form className='address-form' onSubmit={doSignin}>
                    <input type="text"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required /> <br /> <br />

                    <input type="text"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required /><br /> <br />

                    <button className='button' type='submit' >Login</button>

                </form>
                <br />
                <div>
                    Are You a New User
                </div> <br />
                <div>
                    <button className='button' onClick={goToSignup} >Register</button>
                </div>

            </section>
        </div>
    );
}

export default Signin;