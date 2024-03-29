import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from "../components/nav-link"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <NavBar
        to="/"
        siteTitle={siteTitle}
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      ></NavBar>
      <NavBar siteTitle="about" to="/about" />
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
