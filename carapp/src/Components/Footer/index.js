import "./index.css";
import ThemeContext from "../../context/ThemeContext";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {(Value) => {
        const { isDarkTheme } = Value;
        let footerClr = isDarkTheme ? "footer-cont" : "footer-cont footerClrs";
        let colorChange = isDarkTheme ? "black" : " black whiteClr";
        let iconClr = isDarkTheme ? "social-icon" : "social-icon icon-clr";
        let hrLineClr = isDarkTheme ? "hr-line" : "hr-line blk";
        let hrLines = isDarkTheme ? "hr-lines" : "hr-lines hr-black"

        return (
          <div className={footerClr}>
            <div className="sub-cont">
              <h5 className={colorChange}>CarBook</h5>
              <h5 className={colorChange}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </h5>
              <div>
                <BsFacebook className={iconClr} />
                <BsInstagram className={iconClr} />
                <AiOutlineWhatsApp className={iconClr} />
                <AiOutlineTwitter className={iconClr} />
              </div>
            </div>
            <hr className={hrLineClr} />
            <div className="sub-cont">
              <h5 className={colorChange}>Information</h5>
              <h6 className={colorChange}>About</h6>
              <h6 className={colorChange}>Services</h6>
              <h6 className={colorChange}>Term's and Conditions</h6>
              <h6 className={colorChange}>Best Price Guarantee</h6>
              <h6 className={colorChange}>Privacy and Cookies POlicy</h6>
            </div>
            <hr className={hrLineClr} />
            <div className="sub-cont">
              <h5 className={colorChange}>Customer Support</h5>
              <h6 className={colorChange}>FAQ</h6>
              <h6 className={colorChange}>Payment Option</h6>
              <h6 className={colorChange}>Booking Tips</h6>
              <h6 className={colorChange}>How it works</h6>
              <h6 className={colorChange}>Contact Us</h6>
            </div>
            <hr className={hrLineClr} />
            <div className="sub-cont">
              <h5 className={colorChange}>Have a Questions?</h5>
              <div className="loc-row-cont">
                <FaLocationDot className={iconClr} />
                <h6 className={colorChange}>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </h6>
              </div>
              <div className="loc-row-cont">
                <BsFillTelephoneFill className={iconClr} />
                <h6 className={colorChange}>9345687932</h6>
              </div>
              <div className="loc-row-cont">
                <CiMail className={iconClr} />
                <h6 className={colorChange}>cars123@gmail.com</h6>
              </div>
            </div>
            <hr className={hrLines} />
            <h5 className={colorChange} style={{padding:"25px"}}>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</h5>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Footer;
