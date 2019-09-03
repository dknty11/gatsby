import React from "react"
import { Link } from "gatsby"

import "./navigation-item-css-module.modules.css"

const linkStyle = {
  color: "white",
  display: "inline-block",
  margin: "0 0.5rem",
  padding: "0.25rem",
  textDecoration: "None",
}

const activeStyle = {
  background: "#c5a059",
  color: "black",
}

const navigationItem = props => (
  <li className="NavigationItem">
    <Link to={props.linkTo} style={linkStyle} activeStyle={activeStyle}>
      {props.children}
    </Link>
  </li>
)

export default navigationItem
