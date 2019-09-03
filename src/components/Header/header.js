import PropTypes from "prop-types"
import React, { Component } from "react"
// import NavLink from "../nav-link"

import ToolBar from "../Navigations/Toolbar/toolbar"
import SideBar from "../Navigations/Sidebar/sidebar"
import styles from "./header-css-modules.module.css"
// import Logo from "../logo"

class Header extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerCloseHandler = () => {
    this.setState({
      showSideDrawer: false,
    })
  }

  sideDrawerOpenHandler = () => {
    this.setState({
      showSideDrawer: true,
    })
  }

  render() {
    console.log(this.state)
    return (
      <header className={styles.navHeader}>
        <ToolBar clicked={this.sideDrawerOpenHandler}></ToolBar>
        <SideBar
          isOpened={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        ></SideBar>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
