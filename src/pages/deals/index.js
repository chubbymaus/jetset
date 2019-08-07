import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
const LISTING_QUERY = graphql`
  query BlogPostListing {
    allContentfulBlog(limit: 100, sort: { fields: [date], order: [DESC] }) {
      totalCount
      edges {
        node {
          id
          title
          imageLink
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`

const Listing = () => (
  <Layout>
    <div className="container deal-list">
      <div className="columns is-multiline">
        <StaticQuery
          query={LISTING_QUERY}
          render={({ allContentfulBlog }) =>
            allContentfulBlog.edges.map(edge => (
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={`${edge.node.imageLink}`}
                        alt="Placeholder image"
                        style={{ height: "230px" }}
                      />
                    </figure>
                  </div>

                  <div key={edge.node.id} className="card-content">
                    <Link to={`/deals/${edge.node.slug}`}>
                      <h2 className="title has-text-primary">
                        {edge.node.title}
                      </h2>
                    </Link>

                    <p>{edge.node.body.childMarkdownRemark.excerpt}</p>
                    <Link to={`/deals/${edge.node.slug}`}>
                      <h2 className="subtitle has-text-info">Read More</h2>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        />
      </div>
    </div>
  </Layout>
)

export default Listing
