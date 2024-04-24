import img01 from "../CarImages/nissan-offer.png";
import img02 from "../CarImages/offer-toyota.png";
import img03 from "../CarImages/bmw-offer.png";
import img04 from "../CarImages/nissan-offer.png";
import img05 from "../CarImages/offer-toyota.png";
import img06 from "../CarImages/mercedes-offer.png";
import img07 from "../CarImages/toyota-offer-2.png";
import img08 from "../CarImages/mercedes-offer.png";
import { CarItem } from "../CarItem";
import ThemeContext from "../../context/ThemeContext";
import "./index.css";

const Cars = () => {
  const carData = [
    {
      id: 1,
      carName: "Tesla Malibu",
      imgUrl: img01,
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      automatic: "Automatic",
      description:
        " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    },

    {
      id: 2,

      carName: "Toyota Aventador",
      imgUrl: img02,
      model: "Model-2022",
      price: 50,
      speed: "20kmpl",
      automatic: "Automatic",
      description:
        " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    },

    {
      id: 3,

      carName: "BMW X3",
      imgUrl: img03,
      model: "Model-2022",
      price: 65,
      speed: "20kmpl",

      automatic: "Automatic",
      description:
        " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    },

    {
      id: 4,

      carName: "Nissan Mercielago",
      imgUrl: img04,
      model: "Model-2022",
      price: 70,
      speed: "20kmpl",

      automatic: "Automatic",
      description:
        " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    },

    {
      id: 5,

      carName: "Ferrari Camry",
      imgUrl: img05,
      model: "Model-2022",
      price: 45,
      speed: "20kmpl",

      automatic: "Automatic",
      description:
        " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    },

    {
      id: 6,

      carName: "Mercedes Benz XC90",
      imgUrl: img06,
      model: "Model-2022",
      price: 85,
      speed: "20kmpl",

      automatic: "Automatic",
      description:
        " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    },

    {
      id: 7,

      carName: "Audi Fiesta",
      imgUrl: img07,
      model: "Model 3",
      price: 50,
      speed: "20kmpl",

      automatic: "Automatic",
      description:
        " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    },

    {
      id: 8,

      carName: "Rolls Royce Colorado",
      imgUrl: img08,
      model: "Model 3",
      price: 50,
      speed: "20kmpl",

      automatic: "Automatic",
      description:
        " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    },
    {
      id: 9,

      carName: "Rolls Royce Colorado",
      imgUrl: img02,
      model: "Model 3",
      price: 50,
      speed: "20kmpl",

      automatic: "Automatic",
      description:
        " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    },
  ];

  return (
    <ThemeContext.Consumer>
      {(Value) => {
        const { isDarkTheme } = Value;
        let carBg = isDarkTheme ? "cars-row-cont black-clr" : "cars-row-cont";

        return (
          <div className={carBg}>
            {carData.map((each) => (
              <CarItem eachCarData={each} key={each.id} />
            ))}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Cars;
