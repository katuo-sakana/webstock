import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo_black.png" }) {
        childImageSharp {
          fluid(maxWidth: 445) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="footer__primary">
        <div className="footer-logo">
          <Img fluid={data.logo.childImageSharp.fluid} alt="" />
        </div>
      </div>
      <div className="footer__secondary"></div>
      {/* <FontAwesomeIcon icon={faInstagram} /> */}
      {/* <div className="back">
        <Img
          fluid={data.pattern.childImageSharp.fluid}
          alt=""
          style={{ height: "100%" }}
        />
      </div> */}
    </footer>
  )
}
