import React from "react";
import ThemeContext from "../../context/ThemeContext";

import { AiFillCar } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { motion } from "framer-motion";
import "./index.css";

export const CarItem = (props) => {
  const { eachCarData } = props;
  const { id, carName, imgUrl, model, price, speed, automatic, description } =
    eachCarData;

  return (
    <ThemeContext.Consumer>
      {(Value) => {
        
          const { isDarkTheme } = Value;
          const cartItem = isDarkTheme ? "car-item-cont item" : "car-item-cont";

          return (
            <motion.div
              className={cartItem}
              key={id}
              //   initial={{ x: -1500 }}
              animate={{ x: 0 }}
              whileHover={{ scale: 0.9, opacity: 1 }}
              transition={{ duration: 10, delay: 1 }}
            >
              <motion.img
                initial={{ x: -500 }}
                animate={{ x: -5 }}
                whileHover={{ scale: 0.9, opacity: 1 }}
                transition={{ duration: 10, delay: 0 }}
                src={imgUrl}
                className="car-img"
                alt="img"
              ></motion.img>

              <div style={{ textAlign: "center" }}>
                <h4>{carName}</h4>
                <p className="price">$ {price}/ Day</p>
                <motion.button
                  className="book-btn"
                  initial={{ x: -120 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                  }}
                >
                  Book Now
                </motion.button>
              </div>
              <div className="model-row-cont">
                <div className="row-cont">
                  <AiFillCar className="car-icon" />
                  <p>{model}</p>
                </div>
                <div className="row-cont">
                  <IoSettingsOutline className="car-icon" />
                  <p>{automatic}</p>
                </div>
                <div className="row-cont">
                  <BsSpeedometer2 className="car-icon" />
                  <p>{speed}</p>
                </div>
              </div>
              <p className="description">{description}</p>
            </motion.div>
          );
        
      }}
    </ThemeContext.Consumer>
  );
};
