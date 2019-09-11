import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/about-css-modules.module.css"

const AboutPage = () => {
  return (
    <Layout>
      <div className={styles.Container}>
        <SEO title="About us" />
        <div className={styles.AboutContent}>
          <h3>About us</h3>
          <span>
            <p>MAKING THE BEST BEER POSSIBLE</p>
          </span>
          <p>
            We're creating an environment for every one to enjoy the atmosphere.
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
            felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed
            ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra,
            erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam
            massa nisl quis neque. Suspendisse in orci enim.
          </p>
        </div>
        <div className={styles.map}>
          <iframe
            title="our place"
            className={styles.iframe}
            src={
              "https://www.google.com/maps/embed/v1/place?q=place_id:EkA1IMSQxrDhu51uZyBz4buRIDg1LCBUw6JuIFF1eSwgUXXhuq1uIDcsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFtIjASLgoUChIJWaBqqYQvdTERQlq1AjdTnLIQBSoUChIJN8BCWJsvdTERJloaLg0LRs8&key=" +
              `${process.env.GATSBY_GOOGLE_API}`
            }
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
