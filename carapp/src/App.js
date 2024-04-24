import { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/index";
import About from "./Components/About/index";
import Cars from "./Components/Cars/index";
import Services from "./Components/Services/index";
import Contact from "./Components/Contact/index";
import Navbar from "./Components/Navbar/index";
import ThemeContext from "./context/ThemeContext";
import Footer from "./Components/Footer";
import "./App.css";

class App extends Component {
  state = { isDarkTheme: false };

  changeTheme = () => {
    this.setState((prev) => ({ isDarkTheme: !prev.isDarkTheme }));
  };

  render() {
    const { isDarkTheme } = this.state;
    return (
      <div>
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            changeTheme: this.changeTheme,
          }}
        >
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/services" component={Services} />
              <Route path="/cars" component={Cars} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
