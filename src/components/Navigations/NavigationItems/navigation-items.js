import React from "react"

import "./navigation-items-css-module.modules.css"
import NavigationItem from "./NavigationItem/navigation-item"

const navigationItems = props => (
  <ul className="NavigationItems">
    <NavigationItem linkTo="/">Street Beer</NavigationItem>
    <NavigationItem linkTo="/about">About Us</NavigationItem>
    <NavigationItem linkTo="/contact">Contact</NavigationItem>
    <NavigationItem linkTo="/events">Events</NavigationItem>
    <NavigationItem linkTo="/menu">Menu</NavigationItem>
    <NavigationItem linkTo="/pages">Pages</NavigationItem>
  </ul>
)

export default navigationItems
