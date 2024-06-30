import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeCategory.css';

function HomeCategory(props) {

    return (

        <div >
            <section>
                <div className='flex of'>
                    <Link className='ml-3' to='/categorytoys'>
                        <div className='category-round'>
                            <img className='category-img' src="https://res.cloudinary.com/dlspkhndv/image/upload/v1719639568/gulf-kart/qu2jjrufla6choog5knf.jpg" alt="" />
                        </div>
                        <div>
                            TOYS
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categorybag'>
                        <div className='category-round'>
                            <img className='category-img' src="https://d.ibtimes.co.uk/en/full/1616352/hermes-handbags.jpg?w=736" alt="" />
                        </div>
                        <div>
                            BAGS
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categoryfoot'>
                        <div className='category-round'>
                            <img className='category-img' src="https://res.cloudinary.com/dlspkhndv/image/upload/v1719638998/gulf-kart/nb9pm9himgjufbhnjagx.jpg" alt="" />
                        </div>
                        <div>
                            FOOT-WEAR
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categoryperfume'>
                        <div className='category-round'>
                            <img className='category-img' src="https://cdn.shopify.com/s/files/1/1188/2592/products/100mlEDTLifestyleOudLifestyle_1000x.jpg?v=1626948592" alt="" />
                        </div>
                        <div>
                            PERFUME
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categorybeauty' >
                        <div className='category-round'>
                            <img className='category-img' src="https://allurebeautyworld.com/wp-content/uploads/2019/02/Best-Face-Wash-to-Get-the-Glow-in-India.jpg" alt="" />
                        </div>
                        <div>
                            BEAUTY
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categoryfancy' >
                        <div className='category-round'>
                            <img className='category-img' src="https://res.cloudinary.com/dlspkhndv/image/upload/v1719640010/gulf-kart/eohdu50esgxauexr9drr.jpg" alt="" />
                        </div>
                        <div>
                            FANCY-STORE
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categoryolive'>
                        <div className='category-round'>
                            <img className='category-img' src="https://res.cloudinary.com/dlspkhndv/image/upload/v1719639704/gulf-kart/mbntodtxzhnflphcr25x.jpg" alt="" />
                        </div>
                        <div>
                            OLIVE-STORE
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categoryschool-items'>
                        <div className='category-round'>
                            <img className='category-img' src="https://tse4.mm.bing.net/th?id=OIP.uP4sskEbEAR5HTeJkxsjUAHaE8&pid=Api&P=0&h=180" alt="" />
                        </div>
                        <div>
                            SCHOOL
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categoryparty'>
                        <div className='category-round'>
                            <img className='category-img' src="https://cbvalueaddrealty.in/wp-content/uploads/2021/07/foil_ballon_decoration.jpg" alt="" />
                        </div>
                        <div>
                            PARTY-DECORATE
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categoryfashion'>
                        <div className='category-round'>
                            <img className='category-img' src="http://www.thedaycollections.com/wp-content/uploads/2017/07/boy-kids-fashion.png" alt="" />
                        </div>
                        <div>
                            FASHION
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categoryelectronics'>
                        <div className='category-round'>
                            <img className='category-img' src="https://i.pinimg.com/originals/fd/56/fe/fd56fe106a889d7842bd4e519a95d5c8.jpg" alt="" />
                        </div>
                        <div>
                            ELECTRONICS
                        </div>
                    </Link>

                </div>
            </section>
        </div>
    );
}

export default HomeCategory;