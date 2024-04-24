import car from "../Car_Animation_Img/car.png";
import wheel from "../Car_Animation_Img/wheel.png";
import Typewriter from "typewriter-effect";

import "./index.css";

const CarAnnimation = () => {
  const TypingText = () => {
    return (
      <div>
        <h1>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ["Book your Drive Now"],
            }}
          />
        </h1>
      </div>
    );
  };

  return (
    <div>
      <div className="sky">
        {TypingText()}
        <div className="highway"></div>
        <div className="city"></div>

        <div className="car">
          <img src={car} alt="img" />
        </div>
        <div className="wheel">
          <img src={wheel} className="back-wheel" alt="wheel" />
          <img src={wheel} className="front-wheel" alt="wheel" />
        </div>
      </div>
    </div>
  );
};

export default CarAnnimation;
