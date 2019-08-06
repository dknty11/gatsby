import React from "react"

import { Link } from "gatsby"

const NavBar = ({ siteTitle, to }) => (
  <Link
    to={to}
    style={{
      color: `white`,
      display: `inline-block`,
      margin: `0 0.5rem`,
      padding: `0.25rem`,
      textDecoration: `none`,
    }}
  >
    {siteTitle}
  </Link>
)

export default NavBar
