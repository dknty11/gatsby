import React from "react"

import Aux from "../../hoc/Aux"
import BackDrop from "../UI/Backdrop/back-drop"
import styles from "./side-drawer-css-modules.modules.css"
import NavLink from "../nav-link"

const SideDrawer = props => {
  let attachedClasses = [styles.SideDrawer, styles.Close]
  if (props.isOpened) {
    attachedClasses = [styles.SideDrawer, styles.Open]
  }
  return (
    <Aux>
      <BackDrop show={props.isOpened} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <img
            style={{ height: `50px`, verticalAlign: `right` }}
            src="https://images-platform.99static.com/VSs2iyVAJgTX65iCcl3vQfiTpTI=/0x0:961x961/500x500/top/smart/99designs-contests-attachments/66/66189/attachment_66189600"
            alt=""
          />
        </div>
        <NavLink to="/">{props.siteTitle}</NavLink>
        <NavLink to="/about/">About Us</NavLink>
        <NavLink to="/menu/">Menu</NavLink>
        <NavLink to="/events/">Events</NavLink>
      </div>
    </Aux>
  )
}

export default SideDrawer
