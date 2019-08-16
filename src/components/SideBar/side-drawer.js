import React from "react"

import Aux from "../../hoc/Aux"
import Logo from "../logo"
// import BackDrop from "../UI/Backdrop/back-drop"
import styles from "./side-drawer-css-modules.modules.css"

const SideDrawer = props => {
  let attachedClasses = [styles.SideDrawer, styles.Close]
  if (props.isOpened) {
    attachedClasses = [styles.SideDrawer, styles.Open]
  }
  return (
    <Aux>
      {/* <BackDrop show={props.isOpened} clicked={props.closed} /> */}
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo className={styles.Logo} />
        </div>
      </div>
    </Aux>
  )
}

export default SideDrawer
