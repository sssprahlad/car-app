import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import ThemeContext from "../../context/ThemeContext";
import "./index.css";

class Navbar extends Component {
  state = { darkAndLight: false, menu: false };

  onDropMenu = () => {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { isDarkTheme } = value;
          let ulBgclr = isDarkTheme ? "ul-list" : "ul-list-clr";
          let linkClr = isDarkTheme ? "link" : "linkClrs";
          return (
            <ul className={ulBgclr}>
              <li>
                <NavLink exact to="/" className={linkClr}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={linkClr}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/services" className={linkClr}>
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink to="/cars" className={linkClr}>
                  Cars
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={linkClr}>
                  Contact
                </NavLink>
              </li>
            </ul>
          );
        }}
      </ThemeContext.Consumer>
    );
  };

  onChangeMenu = () => {
    this.setState((prev) => ({ menu: !prev.menu }));
  };

  // getClassNameFor = (path) => {
  //   const { match } = this.props;
  //   const currentPath = match.path;
  //   if (currentPath === path) {
  //     return "nav-item-selected-link";
  //   }
  //   return "nav-item-link";
  // };

  render() {
    const { menu } = this.state;
    // console.log(darkAndLight);
    let dropMenu = menu ? "" : this.onDropMenu();
    let menuIcon = menu ? <BiMenu /> : <ImCross />;
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { isDarkTheme, changeTheme } = value;
          const onChangeMode = () => {
            changeTheme();
          };
          let modeIcon = isDarkTheme ? <MdLightMode /> : <CiDark />;
          let iconColor = isDarkTheme ? "white-btn btn" : "btn";
          let UlClr = isDarkTheme ? "nav-bg" : "nav-ul";
          let navBgClr = isDarkTheme ? "nav-bg-clr" : "nav";
          let menuClr = isDarkTheme ? "menu-btn clr" : "menu-btn";
          let clrLink = isDarkTheme ? "whiteLink" : "blackLink";

          return (
            <>
              <nav className={navBgClr}>
                <Link to="/">
                  {" "}
                  <img
                    src="https://media.istockphoto.com/id/1408605259/vector/auto-sports-vehicle-silhouette.jpg?s=612x612&w=0&k=20&c=--lwIV-ayDVrjistgR22-B9xFic1xsAusMxxzu6Mjhw="
                    alt="logo"
                    className="logo"
                  />
                </Link>

                <ul className={UlClr}>
                  <NavLink exact to="/" className={clrLink}>
                    <li>Home</li>
                  </NavLink>

                  <NavLink to="/about" className={clrLink}>
                    <li>About</li>
                  </NavLink>
                  <NavLink to="/services" className={clrLink}>
                    <li>Services</li>
                  </NavLink>
                  <NavLink to="/cars" className={clrLink}>
                    <li>Cars</li>
                  </NavLink>
                  <NavLink to="/contact" className={clrLink}>
                    <li>Contact</li>
                  </NavLink>
                </ul>
                <button className={menuClr} onClick={this.onChangeMenu}>
                  {menuIcon}
                </button>

                <div className="dark-light-cont">
                  <button className={iconColor} onClick={onChangeMode}>
                    {modeIcon}
                  </button>
                </div>
              </nav>
              {dropMenu}
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
