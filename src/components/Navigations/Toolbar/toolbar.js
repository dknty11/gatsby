import React from "react"
import { Link } from "gatsby"

import DrawerToggle from "../Sidebar/DrawToggle/draw-toggle"
import NavigationItems from "../NavigationItems/navigation-items"

import styles from "./toolbar-css-modules.module.css"

const toolbar = props => (
  <header className={styles.Toolbar}>
    <DrawerToggle clickOpen={props.clicked} />
    <div className={styles.Logo1}>
      <Link to="/">
        <img
          style={{ height: "90%" }}
          src="https://images-platform.99static.com/VSs2iyVAJgTX65iCcl3vQfiTpTI=/0x0:961x961/500x500/top/smart/99designs-contests-attachments/66/66189/attachment_66189600"
          alt=""
        />
      </Link>
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar
