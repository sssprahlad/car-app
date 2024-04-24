import "./index.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import ThemeContext from "../../context/ThemeContext";

const Contact = () => {
  return (
    <ThemeContext.Consumer>
      {(Value) => {
        const { isDarkTheme } = Value;
        let text = isDarkTheme ? "contact-text color" : "contact-text";
        let subCont = isDarkTheme
          ? "contact-sub-cont bg-clr"
          : "contact-sub-cont";
        let img = isDarkTheme
          ? "https://static.vecteezy.com/system/resources/previews/029/249/118/non_2x/a-man-holds-an-envelope-or-a-letter-in-his-hands-line-art-style-vector.jpg"
          : "https://static1.s123-cdn-static-a.com/ready_uploads/svg/normal_604d33453977c.svg";
        return (
          <>
            <div className="contact-main-cont">
              <div className={subCont}>
                <h3 className={text}>Contact Us</h3>
                <div className="cont-sub">
                  <BsFillPersonFill className="person-icon" />
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="input"
                  />
                </div>
                <div className="cont-sub">
                  <AiOutlineMail className="person-icon" />
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="input"
                  />
                </div>
                <textarea placeholder="Drop your Question"></textarea>
                <div className="center-cont">
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </div>
              <div className={subCont}>
                <img src={img} alt="img" className="contact-img" />
              </div>
            </div>
            <div className="map-cont">
              <iframe title="our-car-website"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.101946975402!2d78.37394111171166!3d17.454833983374936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9305c37eaf2d%3A0xaea6105b56014ada!2sTrendz%20Trident!5e0!3m2!1sen!2sin!4v1713610313168!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Contact;
