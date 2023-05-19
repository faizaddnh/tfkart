import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.css';

function Carousel(props) {
    return (
        <div className='carousel'>
            
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={35}
                    totalSlides={8}
                    interval={3000}
                    isPlaying={true}

                >
                    <Slider>
                        
                        <Slide index={0}><Image src="https://redtri.com/wp-content/uploads/2015/08/kleencanteen_leakproofwaterbottles_redtricycle.jpg" /></Slide>
                        <Slide index={1}><Image src="https://cdn.shopclues.com/images/detailed/71429/3474582_classmatenotebookoriginalimaehd4hqprm86fr_1495021104.jpg" /></Slide>
                        <Slide index={2}><Image src="https://melekkisphotinos.com/wp-content/uploads/2017/07/feat-fancyPens.jpg" /></Slide>
                        <Slide index={3}><Image src="https://4.bp.blogspot.com/-hj4z_Ax1G6Q/USunJ1gDtCI/AAAAAAAATt8/jd0j0K-lzD8/s1600/Colorful+Umbrellas+Wallpapers+1.jpg" /></Slide>
                        <Slide index={4}><Image src="https://m.media-amazon.com/images/I/61g9Xkl3zAL._AC_UY327_QL65_.jpg" /></Slide>
                        <Slide index={5}><Image src="https://images8.alphacoders.com/420/420872.jpg" /></Slide>
                        <Slide index={6}><Image src="https://s-media-cache-ak0.pinimg.com/originals/ef/c0/97/efc0976bc6f6ca241739620cd7bfe076.jpg" /></Slide>
                        <Slide index={7}><Image src="https://i.ytimg.com/vi/R6qWD-Vh6yo/maxresdefault.jpg" /></Slide>
                    </Slider>
                    <DotGroup />
                </CarouselProvider>
            

        </div>
    );
}

export default Carousel;