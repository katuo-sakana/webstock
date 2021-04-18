import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

import Imgix from "react-imgix"

export default ({ data, location, pageContext }) => (
  <Layout>
    <SEO
      pagetitle="ブログ"
      pagedesc="Webstockブログです"
      pagepath={location.pathname}
    />
    <section className="post-area bloglist">
      <div className="post-area__inner">
        <h1 className="bar">RECENT POSTS</h1>
        <div className="post-box-wrap">
          {data.allMicrocmsBlog.edges.map(({ node }) => (
            <article className="post-box" key={node.id}>
              <Link to={`/blog/${node.slug}/`}>
                <figure>
                  {node.eyecatch.url ? (
                    <Imgix
                      src={node.eyecatch.url}
                      sizes="(max-width: 500px) 100vw, 500px"
                      htmlAttributes={{
                        alt: "",
                      }}
                    />
                  ) : (
                    <Img fluid={data.dummy.childImageSharp.fluid} alt="" />
                  )}
                </figure>
                <h3>{node.title}</h3>
              </Link>
            </article>
          ))}
        </div>

        <ul className="pagenation">
          {!pageContext.isFirst && (
            <li className="prev">
              <Link
                to={
                  pageContext.currentPage === 2
                    ? `/blog/`
                    : `/blog/${pageContext.currentPage - 1}/`
                }
                rel="prev"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>前のページ</span>
              </Link>
            </li>
          )}
          {!pageContext.isLast && (
            <li className="next">
              <Link to={`/blog/${pageContext.currentPage + 1}/`} rel="next">
                <span>次のページ</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    dummy: file(relativePath: { eq: "code_dummy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMicrocmsBlog(
      sort: { order: DESC, fields: publishedAt }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            url
          }
        }
      }
    }
  }
`
