import React from "react"

import NavigationItems from "../NavigationItems/navigation-items"
import "./sidebar-css-module.modules.css"
import Backdrop from "../../UI/Backdrop/back-drop"

const sideBar = props => {
  let attachedClasses = ["SideDrawer", "Close"]
  if (props.isOpened) {
    attachedClasses = ["SideDrawer", "Open"]
  }
  console.log(props)
  return (
    <>
      <Backdrop show={props.isOpened} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className="Logo2">{/* <Logo /> */}</div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </>
  )
}

export default sideBar
