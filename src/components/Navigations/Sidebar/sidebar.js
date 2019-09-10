import React from "react"

import NavigationItems from "../NavigationItems/navigation-items"
import styles from "./sidebar-css-modules.module.css"
import Backdrop from "../../UI/Backdrop/back-drop"

const sideBar = props => {
  let attachedClasses = [styles.SideDrawer, styles.Close]
  if (props.isOpened) {
    attachedClasses = [styles.SideDrawer, styles.Open]
  }
  return (
    <>
      <Backdrop show={props.isOpened} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        {/* <div className="Logo2"><Logo /></div> */}
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </>
  )
}

export default sideBar
