import React from "react"
import "./draw-toggle-css-module.modules.css"

const drawerToggle = props => (
  <div className="DrawerToggle" onClick={props.clickOpen}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default drawerToggle
