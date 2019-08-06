import React from "react"
import { Link } from "gatsby";

// Display inline-block allow you to display block in one line
// Usually being used in Navigation Bar

const linkStyle = {
  color: 'white',
  display: 'inline-block',
  margin: '0 0.5rem',
  padding: '0.25rem',
  textDecoration: 'None'
}

const activeStyle = {
  background: 'white',
  color: 'black'
}

const NavLink = ({ children, to}) => (
  <Link to={to} style={linkStyle} activeStyle={activeStyle}>{children}</Link>
)

export default NavLink