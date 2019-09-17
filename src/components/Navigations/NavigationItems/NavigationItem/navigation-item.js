import React from "react"
import { Link } from "gatsby"

import styles from "./navigation-item-css-modules.module.css"

// const activeStyle = {
//   backgroundColor: "#c5a059",
// }

const navigationItem = props => (
  <li className={styles.NavigationItem}>
    <Link to={props.linkTo} activeClassName={styles.activeClass}>
      {props.children}
    </Link>
  </li>
)

export default navigationItem
