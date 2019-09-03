import React from "react"

import DrawerToggle from "../Sidebar/DrawToggle/draw-toggle"
import NavigationItems from "../NavigationItems/navigation-items"

import styles from "./toolbar-css-modules.module.css"

const toolbar = props => (
  <header className={styles.Toolbar}>
    <DrawerToggle clickOpen={props.clicked} />
    <div className={styles.Logo1}>{/* <Logo /> */}</div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar
