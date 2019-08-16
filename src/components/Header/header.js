import PropTypes from "prop-types"
import React from "react"
import NavLink from "../nav-link"

import styles from "./header-css-modules.module.css"
import Logo from "../logo"
import SideDrawer from "../SideBar/side-drawer"

const Header = ({ siteTitle }) => (
  <header className={styles.navHeader}>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Dancing+Script"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Oswald"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Montserrat:300i,400"
    />
    <SideDrawer isOpened={true} closed={false}></SideDrawer>
    <div className={styles.container}>
      <p style={{ margin: 0 }}>
        <NavLink to="/">{siteTitle}</NavLink>
        <NavLink to="/about/">About Us</NavLink>
        <NavLink to="/menu/">Menu</NavLink>
        <NavLink to="/events/">Events</NavLink>
        <NavLink to="/pages/">Pages</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
        <Logo className={styles.headerLogo} />
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
