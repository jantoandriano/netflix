import Slider from "react-slick";

export const Section = ({ children, name, slideToShow }) => {
    const setting = {
        infinite: true,
        slidesToShow: slideToShow ? slideToShow : 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <div>
            <div className="font-bold text-xl">
                {name}
            </div>
            <Slider {...setting}>
                {children}
            </Slider>
        </div>
    )
}