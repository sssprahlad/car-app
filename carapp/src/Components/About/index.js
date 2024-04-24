import "./index.css";
import ThemeContext from "../../context/ThemeContext";

const About = () => {
  const founderData = [
    {
      id: 1,
      founder: "Founder",
      name: "Gopi",
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1713789508~exp=1713793108~hmac=a758a9454f81120ea3676fca737415483fda1fb126ec09c62fbe85b372cbd2ed&w=1060",
      description:
        "how the business was founded, the key players, the beliefs and principles that shaped the company, and details about your team and team members.",
    },
    {
      id: 2,
      founder: "Founder",
      name: "Sharath",
      img: "https://img.freepik.com/free-photo/confident-bearded-macho-man-looks-pleased-has-friendly-kind-grin-face-wears-round-spectacles-pink-jumper_273609-51174.jpg?t=st=1713789579~exp=1713793179~hmac=e47896c1c88738667667933a31987d38a5a6a72f7fa86c8f4abbf3403f66dd6b&w=1060",
      description:
        "how the business was founded, the key players, the beliefs and principles that shaped the company, and details about your team and team members.",
    },
    {
      id: 3,
      founder: "Founder",
      name: "Krishna",
      img: "https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?t=st=1713789652~exp=1713793252~hmac=0618c4ab0cca69972af2221535799ff9e59521b4b3b63496037e0c5e73e3afe8&w=1060",
      description:
        "how the business was founded, the key players, the beliefs and principles that shaped the company, and details about your team and team members.",
    },
    {
      id: 4,
      founder: "Founder",
      name: "Yuwa",
      img: "https://img.freepik.com/free-photo/young-handsome-business-man-choosing-car-car-showroom_1303-17903.jpg?size=626&ext=jpg&ga=GA1.1.381278150.1658455302&semt=ais",
      description:
        "how the business was founded, the key players, the beliefs and principles that shaped the company, and details about your team and team members.",
    },
    {
      id: 5,
      founder: "Founder",
      name: "Siva",
      img: "https://img.freepik.com/premium-photo/happy-handsome-businessman-against-minimalist-backdrop-with-crossed-arms-generative-ai_830962-3126.jpg?size=626&ext=jpg&ga=GA1.1.381278150.1658455302&semt=ais",
      description:
        "how the business was founded, the key players, the beliefs and principles that shaped the company, and details about your team and team members.",
    },
    {
      id: 6,
      founder: "Founder",
      name: "Gnanesh",
      img: "https://img.freepik.com/free-photo/portrait-businessman-smiling_23-2150771049.jpg?size=626&ext=jpg&ga=GA1.1.381278150.1658455302&semt=ais",
      description:
        "how the business was founded, the key players, the beliefs and principles that shaped the company, and details about your team and team members.",
    },
  ];
  return (
    <ThemeContext.Consumer>
      {(Value) => {
        const { isDarkTheme } = Value;
        let aboutBg = isDarkTheme
          ? "about-main-cont"
          : "about-main-cont about-bg";
        let aboutSubBg = isDarkTheme
          ? "about-sub-cont"
          : "about-sub-cont about-sub";
        return (
          <div className={aboutBg}>
            <div className="about-row-cont">
              <div className={aboutSubBg}>
                <h1 className="company">Car Company</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                  suscipit, repudiandae similique accusantium eius nulla quam
                  laudantium sequi.
                </p>
                <p>
                  Debitis voluptates corporis saepe molestias tenetur ab quae,
                  quo earum commodi, laborum dolore, fuga aliquid delectus cum
                  ipsa?
                </p>
              </div>
              <div className="about-sub-cont">
                <img
                  src="https://themewagon.github.io/carrent/images/hero_2.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="team-cont">
              <div className="our-team-cont">
                <h4 className="our-team">Our Team</h4>
                <h2 className="meet-text">Meet Our Team</h2>
                <p className="our-team-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis provident eius ratione <br />
                  velit, voluptas laborum nemo quas ad necessitatibus placeat?
                </p>
              </div>
              <div className="founder-details-cont">
                {founderData.map((eachItem) => (
                  <div className="each-card" key={eachItem.id}>
                    <img src={eachItem.img} alt="img" className="founder-img" />
                    <h5>{eachItem.founder}</h5>
                    <h5>{eachItem.name}</h5>
                    <p>{eachItem.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-row-cont">
              <div className="about-sub-cont">
                <img
                  src="https://themewagon.github.io/carrent/images/hero_2.jpg"
                  alt="img"
                />
              </div>

              <div className={aboutSubBg}>
                <h1 className="company">Our History</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                  suscipit, repudiandae similique accusantium eius nulla quam
                  laudantium sequi.
                </p>
                <p>
                  Debitis voluptates corporis saepe molestias tenetur ab quae,
                  quo earum commodi, laborum dolore, fuga aliquid delectus cum
                  ipsa?
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default About;
