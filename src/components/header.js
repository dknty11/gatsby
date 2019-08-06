import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavLink from "./nav-link";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
      borderBottom: `1px solid`,
      borderColor: `#c5a059`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about/">About Us</NavLink>
        <NavLink to="/menu/">Menu</NavLink>
        <NavLink to="/events/">Events</NavLink>
        <NavLink to="/pages/">Pages</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
        <img
          alt=""
          src="http://themelooper.com/html/jz/images/logo.png"
          style={{
            height: "171px",
            position: "absolute",
            zIndex: 9,
            top: -13,
          }}
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
