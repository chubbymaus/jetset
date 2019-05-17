import React from "react"

import styled from "styled-components"

const FooterSection = styled.footer`
  a {
    color: #f1f0ee;
  }
  a:hover {
    color: #22a0f3;
  }
`

const Footer = () => (
  <FooterSection className="section has-background-primary is-small has-text-centered">
    <div className="container is-narrow">
      <div className="logo" />
      <div className="columns has-text-white is-centered">
        <div className="column is-half">
          <h1 className="title has-text-white ">footer text</h1>
        </div>
      </div>
      <p className="has-text-white">
        &copy; {new Date().getFullYear()} Subscription Starter
      </p>
    </div>
  </FooterSection>
)

export default Footer
