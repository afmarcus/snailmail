import React from 'react'
import Link from 'gatsby-link'
import SideBar from '../components/sidebar'

const IndexPage = ({ data }) => {
  let currentPost = data.allMarkdownRemark.edges[0]
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <section className="article-title">
                <h2 className="has-text-weight-semibold is-size-3">{currentPost.node.frontmatter.title}</h2>
                <small>{currentPost.node.frontmatter.date}</small>
                <div className="article-info">
                  <img src={currentPost.node.frontmatter.profile_image.publicURL} />
                  <p>{currentPost.node.frontmatter.author}</p>
                </div>
              </section>
              <div className="content">
                <div dangerouslySetInnerHTML={{ __html: currentPost.node.html }} />
              </div>
            </div>
            <div className="column is-4">
              <SideBar blogList={data.allMarkdownRemark} />
            </div>
          </div>
        </div>
      </section>

    </div >
  )
}

export default IndexPage

export const query = graphql`
query IndexQuery {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "dddd, MMMM Do, YYYY")
          author
          profile_image {
            publicURL
            childImageSharp {
                sizes(maxWidth: 1240 ) {
                  srcSet
                }
              }
            }
        }
        fields {
          slug
        }
        html
      }
    }
  }
}
`