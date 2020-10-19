import Slider from "react-slick";
import carouselData from './data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Desktop() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="p-10 bg-melon">
      <Slider {...settings}>
        {carouselData().map(d => (
          <div key={d.id}>
            <img src={d.image} />
          </div>
        ))}
      </Slider>
    </section>
  );
}