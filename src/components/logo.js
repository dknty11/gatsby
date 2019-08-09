import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imgStyle = {
    marginLeft: `50px`,
    textAlign: `right`,
    height: `99px`,
    width: `100px`,
    position: `absolute`,
    zIndex: 1,
    top: `-13px`,
    display: `inline-block`,
  }

  return (
    <Img style={imgStyle} fluid={data.placeholderImage.childImageSharp.fluid} />
  )
}

export default Logo
