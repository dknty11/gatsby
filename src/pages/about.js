import React from "react"
import { Link } from "gatsby"
import ImageGallery from "react-image-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"

const images = [
  {
    original:
      "http://74211.com/wallpaper/picture_big/natural_scenery_wallpaper_Victoria_falls_.jpg",
  },
  {
    original:
      "http://wallpaper21.com/wp-content/uploads/2017/01/natural-wallpaper-High-Resolution-Download8.jpg",
  },
  {
    original:
      "https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1920x1080.jpg",
  },
]

const AboutPage = () => (
  <Layout>
    <SEO title="About us"></SEO>
    <h3>About us</h3>
    <p>We're creating an environment for every one to enjoy the atmosphere.</p>
    <ImageGallery
      style={{ width: `100%` }}
      items={images}
      showThumbnails={false}
      showPlayButton={false}
      showFullscreenButton={false}
      lazyLoad={true}
      autoPlay={true}
    />
    <Link to="/">Home page</Link>
  </Layout>
)

export default AboutPage
