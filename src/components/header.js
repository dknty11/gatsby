import PropTypes from "prop-types"
import React from "react"
import NavLink from "./nav-link"

import styles from "../components/header-css-modules.module.css"

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
    <div className={styles.container}>
      <p style={{ margin: 0 }}>
        {/* <NavLink to="/">{siteTitle}</NavLink> */}
        <NavLink to="/">{siteTitle}</NavLink>
        <NavLink to="/about/">About Us</NavLink>
        <NavLink to="/menu/">Menu</NavLink>
        <NavLink to="/events/">Events</NavLink>
        <NavLink to="/pages/">Pages</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
        <img
          className={styles.headerLogo}
          alt=""
          src="https://images-platform.99static.com/VSs2iyVAJgTX65iCcl3vQfiTpTI=/0x0:961x961/500x500/top/smart/99designs-contests-attachments/66/66189/attachment_66189600"
        />
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
