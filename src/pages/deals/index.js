import React, { Component } from "react";

import netlifyIdentity from "netlify-identity-widget";
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
          private
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

class Listing extends Component{
  render(){
  if(netlifyIdentity.currentUser() !== null){  
  return(
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
  )} else {
    return (
      <Layout>
        <div className="container deal-list">
          <div className="columns is-multiline">
          <h1 className='title'>Sign up or log in</h1>
          </div>
        </div>
      </Layout>
    );
  }}};

export default Listing
