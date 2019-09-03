import React from "react"
import ImageGallery from "react-image-gallery"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styles from "../components/index-css-modules.module.css"

const images = [
  {
    original: "http://themelooper.com/html/jz/images/banner-img-1.jpg",
  },
  {
    original: "http://themelooper.com/html/jz/images/banner-img-2.jpg",
  },
  {
    original: "http://themelooper.com/html/jz/images/banner-img-3.jpg",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.item}>
      {/* <img
        src="http://themelooper.com/html/jz/images/banner-img-1.jpg"
        alt=""
        className={styles.imgBackground}
      /> */}
      <ImageGallery
        className={styles.imgBackground}
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        lazyLoad={true}
        autoPlay={false}
        showBullets={true}
      />
      <div className={styles.caption}>
        <div className={styles.holder}>
          <strong className={styles.title}>Orignal taste • since 1994</strong>
          <span className={styles.titleIndex}>Skywalker Quality</span>
          <h1 className={styles.h1Index}>
            Drunk, Fun Memories<b className={styles.bIndex}>&</b>Chill
          </h1>
          <strong className={styles.title2}>For Friends Saga</strong>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
