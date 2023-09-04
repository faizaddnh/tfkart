import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeCategory.css';

function HomeCategory(props) {

    return (

        <div >
            <section>
                <div className='flex of'>
                    <Link className='ml-3' to='/categorypardha'>
                        <div className='category-round'>
                            <img className='category-img' src="https://www.gulfislamicstore.com/image/cache/catalog/KIMONO%20ABAYA/24-800x1100.jpg" />
                        </div>
                        <div>
                            LIBHAS-PARDHA
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categoryolive'>
                        <div className='category-round'>
                            <img className='category-img' src="https://res.cloudinary.com/dlspkhndv/image/upload/v1671604920/Falah/IMG_20220819_182149_ld6dps.jpg" alt="" />
                        </div>
                        <div>
                            OLIVE-STORE
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

                    <Link className='ml-3' to='/categorybeauty' >
                        <div className='category-round'>
                            <img className='category-img' src="https://allurebeautyworld.com/wp-content/uploads/2019/02/Best-Face-Wash-to-Get-the-Glow-in-India.jpg" alt="" />
                        </div>
                        <div>
                            BEAUTY
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

                    <Link className='ml-3' to='/categoryelectronics'>
                        <div className='category-round'>
                            <img className='category-img' src="https://i.pinimg.com/originals/fd/56/fe/fd56fe106a889d7842bd4e519a95d5c8.jpg" alt="" />
                        </div>
                        <div>
                            ELECTRONICS
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

                    <Link className='ml-3' to='/categorytoys'>
                        <div className='category-round'>
                            <img className='category-img' src="https://live.staticflickr.com/1907/44289962475_e5c5209506_b.jpg" alt="" />
                        </div>
                        <div>
                            TOYS
                        </div>
                    </Link>

                    <Link className='ml-3' to='/categoryfoot'>
                        <div className='category-round'>
                            <img className='category-img' src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/2560w/products/26009/239573/black-designer-formal-oxford-shoes-for-men-wedding-shoes-leather-italy-pointed-toe-mens-dress-shoes__55311.1549627134.jpg?c=2" alt="" />
                        </div>
                        <div>
                            FOOT-WEAR
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
                </div>
            </section>
        </div>
    );
}

export default HomeCategory;