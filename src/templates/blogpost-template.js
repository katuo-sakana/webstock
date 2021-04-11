import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import {
  faChevronLeft,
  faChevronRight,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"
import htmlToText from "html-to-text"
import Imgix from "react-imgix"
import moment from "moment"

export default ({ data, pageContext, location }) => {
  return (
    <Layout>
      <SEO
        pagetitle={data.microcmsBlog.title}
        pagedesc={`${htmlToText
          .fromString(data.microcmsBlog.content, {
            ignoreImage: true,
            ignoreHref: true,
          })
          .slice(0, 70)}…`}
        pagepath={location.pathname}
        blogimg={data.microcmsBlog.eyecatch.url}
        pageimgw={data.microcmsBlog.fields.width}
        pageimgh={data.microcmsBlog.fields.height}
      />
      <div className="post-area">
        <div class="post-area__inner">
          <h1 className="bar post-title">{data.microcmsBlog.title}</h1>
          <figure>
            <Imgix
              src={data.microcmsBlog.eyecatch.url}
              sizes="(max-width: 1600px) 100vw, 1600px"
              alt=""
            />
          </figure>
          <article className="post-content">
            <div className="post-content__inner">
              <aside className="info">
                <time dateTime={data.microcmsBlog.publishedAt}>
                  <FontAwesomeIcon icon={faClock} />
                  {moment(data.microcmsBlog.publishDate).format(`YYYY-MM-DD`)}
                </time>
                <div className="cat">
                  <FontAwesomeIcon icon={faFolderOpen} />
                  <ul>
                    {data.microcmsBlog.category.map(cat => (
                      <li className={cat.categorySlug} key={cat.id}>
                        <Link to={`/category/${cat.categorySlug}/`}>
                          {cat.category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
              <div
                className="postbody"
                dangerouslySetInnerHTML={{ __html: data.microcmsBlog.content }}
              ></div>
              <ul className="postlink">
                {pageContext.next && (
                  <li className="prev">
                    <Link to={`/blog/${pageContext.next.slug}/`} rel="prev">
                      <FontAwesomeIcon icon={faChevronLeft} />
                      <span>{pageContext.next.title}</span>
                    </Link>
                  </li>
                )}
                {pageContext.previous && (
                  <li className="next">
                    <Link to={`/blog/${pageContext.previous.slug}/`} rel="next">
                      <span>{pageContext.previous.title}</span>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      title
      publishedAt
      publishDate
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        url
      }
      fields {
        height
        width
      }
      content
    }
  }
`
