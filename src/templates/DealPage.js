import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeaderImage = styled.div`
  height: 450px;
  background: linear-gradient(
      0deg,
      rgba(55, 55, 55, 0.6),
      rgba(55, 55, 55, 0.6)
    ),
    url("${props => props.image}")
      no-repeat  center;
          -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
        
`

export default class PostLayout extends Component {
  render() {
    const { contentfulBlog } = this.props.data
    return (
      <Layout>
        <HeaderImage image={contentfulBlog.imageLink} />
        <div className="blog-content container is-fluid">
          <div className="columns">
            <div className="column is-three-quarters">
              <div className="card main-card shadowed">
                <div className="card-content">
                  <h1 className="title">{contentfulBlog.title}</h1>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: contentfulBlog.body.childMarkdownRemark.html,
                    }}
                  />
                  <br />
                  <Link to="/deals" className="return-link">
                    <div className="subtitle has-text-primary">
                      <FontAwesomeIcon icon={["far", "arrow-left"]} />
                      <span> Back to deals listing</span>
                    </div>
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            <div className="column is-one-quarter">
              <div className="card main-card shadowed">
                <div className="card-content">
                  <h2 className="subtitle">Recent Posts</h2>
                  <h2 className="subtitle">Recent Posts</h2>
                  <h2 className="subtitle">Recent Posts</h2>
                  <h2 className="subtitle">Recent Posts</h2>
                  <h2 className="subtitle">Recent Posts</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      imageLink
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
