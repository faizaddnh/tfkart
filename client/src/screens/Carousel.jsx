import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function Carousel(props) {
    return (
        <div className='carousel'>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={35}
                totalSlides={9}
                interval={3000}
                marginTop={0}
                isPlaying={true}

            >
                <Slider>
                    <Slide index={0}><Image src="https://res.cloudinary.com/dlspkhndv/image/upload/v1719584873/gulf-kart/IMG-20240628-WA0264_uigh8z.jpg" /></Slide>
                    <Slide index={1}><Image src="https://res.cloudinary.com/dlspkhndv/image/upload/v1686626674/IMG-20230611-WA0145_uaa5al.jpg" /></Slide>
                    <Slide index={2}><Image src="https://res.cloudinary.com/dlspkhndv/image/upload/v1719584873/gulf-kart/IMG-20240628-WA0263_dfxetj.jpg" /></Slide>
                    <Slide index={3}><Image src="https://res.cloudinary.com/dlspkhndv/image/upload/v1719584873/gulf-kart/IMG-20240628-WA0265_qq3wdf.jpg" /></Slide>
                    <Slide index={4}><Image src="http://sneakerhdwallpapers.com/wallpapers/2016/nike-2016-allstar-shoes-wallpaper.jpg" /></Slide>
                    <Slide index={5}><Image src="https://www.dealscosmos.com/img/deals/l/p1105-up-to-50-off-on-sofft-women-s-footwear-sale.jpg" /></Slide>
                    <Slide index={6}><Image src="https://lehleo.com/website/wp-content/uploads/2020/11/fea-9-1280x765.jpg" /></Slide>
                    <Slide index={7}><Image src="https://i.ytimg.com/vi/R6qWD-Vh6yo/maxresdefault.jpg" /></Slide>
                    <Slide index={8}><Image src="https://www.dealscosmos.com/img/deals/l/p957-best-women-s-watches-on-sale-up-to-60-off.jpg" /></Slide>
                </Slider>
                <DotGroup />
            </CarouselProvider>


        </div>
    );
}

export default Carousel;