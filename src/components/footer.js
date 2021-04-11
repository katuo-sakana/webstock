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
      allMicrocmsCategory {
        edges {
          node {
            id
            category
            categorySlug
          }
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="footer__primary">
        <ul className="ftr-list">
          {data.allMicrocmsCategory.edges.map(({ node }) => (
            <li className="ftr-list__item" key={node.id}>
              <Link
                className="ftr-list__item-link"
                to={`/category/${node.categorySlug}/`}
              >
                {node.category}
              </Link>
            </li>
          ))}
        </ul>
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
