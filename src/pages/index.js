import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Imgix from "react-imgix"

export default ({ data }) => (
  <Layout>
    <SEO />
    <section>
      <div className="post-area">
        <div class="post-area__inner">
          <div className="post-box-wrap">
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <article className="post-box" key={node.id}>
                <Link to={`/${node.slug}/`}>
                  <figure className="post-box__image">
                    {node.eyecatch ? (
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
                  <h3 className="post-box__title">{node.title}</h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    dummy: file(relativePath: { eq: "code_dummy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fruit: file(relativePath: { eq: "fruit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    grain: file(relativePath: { eq: "grain.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beverage: file(relativePath: { eq: "beverage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    berry: file(relativePath: { eq: "berry.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pattern: file(relativePath: { eq: "pattern.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMicrocmsBlog(
      sort: { order: DESC, fields: publishedAt }
      skip: 0
      limit: 24
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
