import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./footer-css-modules.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <Row>
        <Col md={4} sm={4} xs={3}>
          <Link to="/">
            <img
              className={styles.image}
              src="https://images-platform.99static.com/VSs2iyVAJgTX65iCcl3vQfiTpTI=/0x0:961x961/500x500/top/smart/99designs-contests-attachments/66/66189/attachment_66189600"
              alt=""
            />
          </Link>
        </Col>
        <Col md={8} sm={8} xs={9}>
          <Row>
            <Col xs={4} className={styles.title}>
              Call us:
            </Col>
            <Col xs={8} className={styles.content}>
              0905097868
            </Col>
          </Row>
          <Row>
            <Col xs={4} className={styles.title}>
              Address:
            </Col>
            <Col xs={8} className={styles.content}>
              Trung Son Dist, HCM City
            </Col>
          </Row>
          <Row>
            <Col xs={4} className={styles.title}>
              Email:
            </Col>
            <Col xs={8} className={styles.content}>
              qlun@gmail.com
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md={8} style={{ textAlign: `right` }}>
          © {new Date().getFullYear()}, Developed by {` `}
          <a className={styles.a} href="https://twitter.com/vinh_nguyenhoai">
            Vinh Nguyen
          </a>{" "}
          with {` `}
          <a className={styles.a} href="https://gatsbyjs.org">
            Gatsby
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
