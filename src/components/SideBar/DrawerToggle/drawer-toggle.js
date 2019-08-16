import React from "react"

import styles from "./drawer-toggle-css-modules.module.css"

const drawerToggle = props => (
  <div className={styles.DrawerToggle} onClick={props.clickOpen}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default drawerToggle
