import React from 'react';
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import './Success.css';

function SuccessOrder(props) {

    // this customizes the component tsParticles installation
    const customInit = async (engine) => {
        // this adds the preset to tsParticles, you can safely use the
        await loadFireworksPreset(engine);
    };

    const options = {
        preset: "fireworks"
        
    };


    return (
        <div>
            <section>
            <div className='blinkdiv'>
            <img className="success-logo" src="https://res.cloudinary.com/dlspkhndv/image/upload/v1719584558/gulf-kart/gulf-kart_logo_r2szpb.jpg" alt="" />
            <img className="success-logo"src="https://static.vecteezy.com/system/resources/thumbnails/017/110/950/original/green-check-mark-icon-animation-animated-check-mark-on-white-background-free-video.jpg" alt="" />
                        <h1>YOUR ORDER IS SUCCESSFULLY PLACED</h1>
                        <h4>YOU WILL GET A CALL OR WHATSAPP MESSAGE FROM OUR <br /> CUSTOMER CARE EXECUTIVE TO CONFIRM YOUR ORDER </h4>
                        <h4>YOUR ORDER WILL GET DELIVERED WITH IN 7 DAYS</h4>
                        <h4>HAVE A NICE DAY</h4>
                        <h1>THANKS FOR SOPPING WITH GULFKART</h1>
                    </div>
                {/*<Particles options={options} init={customInit} ></Particles>*/}
            </section>


        </div>
    );
}

export default SuccessOrder;