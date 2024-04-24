import "./index.css";
import ThemeContext from "../../context/ThemeContext";
import YellowCar from "../YellowCar";

const Services = () => {
  return (
    <ThemeContext.Consumer>
      {(Value) => {
        const { isDarkTheme } = Value;
        let servicesBg = isDarkTheme
          ? "services-main-cont services-black"
          : "services-main-cont";
        let subServices = isDarkTheme
          ? "service-sub services-bg"
          : "service-sub";
        let serviceText = isDarkTheme ? "services-text text" : "services-text";
        return (
          <div style={{ padding: "0", margin: "0" }}>
             <YellowCar/>
            {" "}
            <div className={serviceText}>
              <h4 style={{paddingTop:'10px'}}>SERVICES</h4>
              <h2>Our Latest Services</h2>
             
            </div>
            <div className={servicesBg}>
              <div className={subServices}>
                <div className="services-sub-cont">
                  <div className="circle-cont">sai</div>
                  <h4>Wedding Ceremony</h4>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className={subServices}>
                <div className="services-sub-cont">
                  <div className="circle-cont">sai</div>
                  <h4>City Transfer</h4>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className={subServices}>
                <div className="services-sub-cont">
                  <div className="circle-cont">sai</div>
                  <h4>Airport Transfer</h4>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className={subServices}>
                <div className="services-sub-cont">
                  <div className="circle-cont">sai</div>
                  <h4>Whole City Tour</h4>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className={subServices}>
                <div className="services-sub-cont">
                  <div className="circle-cont">sai</div>
                  <h4>Car Accessories</h4>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className={subServices}>
                <div className="services-sub-cont">
                  <div className="circle-cont">sai</div>
                  <h4>Repair</h4>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Services;
