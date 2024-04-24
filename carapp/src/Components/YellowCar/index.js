import ThemeContext from "../../context/ThemeContext";
import YellocarImg from "../CarImages/car.png";

import "./index.css";

const YellowCar = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDarkTheme } = value;
        let carBgClr = isDarkTheme ? "row-img-cont dark" : "row-img-cont";
        return (
          <div className={carBgClr}>
            <div className="img-sub-cont">
              <h3>Fast & Easy Way To Rent A Car</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts
              </p>
              <button className="book-btn">Book Now</button>
            </div>
            <div className="img-sub-cont">
              <img src={YellocarImg} className="car-img" alt="car-img" />
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default YellowCar;
