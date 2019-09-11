import React from "react"
import styles from "./backdrop-css-modules.module.css"

const backdrop = props => {
  console.log(styles)
  return props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null
}

export default backdrop
