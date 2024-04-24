import ThemeContext from "../../context/ThemeContext";
import { HeaderMainCont, SliderCont, ImgCont, Image } from "./styledComponents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarAnnimation from "../CarAnnimation";
import YellowCar from "../YellowCar";


// import "./index.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDarkTheme } = value;

        return (
          <HeaderMainCont isDarkTheme={isDarkTheme}>
           <YellowCar/>
            <SliderCont>
              <Slider {...settings}>
                <ImgCont>
                  <Image src="https://c8.alamy.com/comp/2RAMHHB/milton-keynesuk-july-2nd-2023-2017-blue-bmw-320-car-travelling-on-an-english-country-road-2RAMHHB.jpg" />
                </ImgCont>
                <ImgCont>
                  <Image src="https://assets.choosemycar.com/vehicles/large/5813455_542_0377_vehicle-5813455-001-20240320-125901-98c2b4a931539dfa10308779de7883ff3bce073af7366743be5dceec6ad43dd8.jpg" />
                </ImgCont>
                <ImgCont>
                  <Image src="https://assets.choosemycar.com/vehicles/large/4423240_767_4096_vehicle-4423240-002-20230305-050607-88ff3da708508904067f80bd1e7f1529ba22530cd3640aa674720a880070f7fe.jpg" />
                </ImgCont>
                <ImgCont>
                  <Image src="https://carcliq.ams3.cdn.digitaloceanspaces.com/vehicle/969/5292897_8004%2C109_vehicle-5292897-005-20230916-052004.jpg" />
                </ImgCont>
                <ImgCont>
                  <Image src="https://static.theprint.in/wp-content/uploads/2022/11/Wranglr-Rubicon.jpg" />
                </ImgCont>
              </Slider>
            </SliderCont>
            <CarAnnimation />
          </HeaderMainCont>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Home;
