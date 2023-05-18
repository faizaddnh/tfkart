import React from 'react';
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

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
                <Particles options={options} init={customInit} >
                    <div>
                        <h1>THANKS FOR SOPPING WITH TFKART</h1>
                        <h4>YOU WILL GET A CALL OR WHATSAPP MESSAGE FROM OUR <br /> CUSTOMER CARE EXECUTIVE TO CONFIRM YOUR ORDER </h4>
                        <h4>YOUR ORDER WILL GET DELIVERED WITH IN 2 DAYS</h4>
                        <h4>HAVE A NICE DAY</h4>
                    </div>
                </Particles>
            </section>


        </div>
    );
}

export default SuccessOrder;