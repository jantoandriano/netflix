import Slider from "react-slick";
import { CarouselCard } from "../carousel-card/carousel-card";

export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        cssEase: "linear"
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <CarouselCard />
                </div>
                <div>
                    <CarouselCard />
                </div>
                <div>
                    <CarouselCard />
                </div>

                <div>
                    <CarouselCard />
                </div>
            </Slider>
        </div>
    )
}