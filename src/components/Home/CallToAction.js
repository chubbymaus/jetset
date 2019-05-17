import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .button {
    width: 250px;
    margin: 5px auto;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`
const JumboContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const CallToAction = () => (
  <section
    className="hero has-background-white is-medium is-bold"
    id="CallToAction"
  >
    <div className="container is-fluid ">
      <JumboContainer>
        <div className="hero-text has-text-centered">
          <h1 className="has-text-white title">Jumbotrontext</h1>
          <h2 className="has-text-weight-light subtitle has-text-white">
            Collaborate, store, and share faster, safer, and more transparently
          </h2>
          <ButtonGroup>
            <a href="#about">
              <div className="is-info jumbotron-button button first_button shadowed is-medium">
                Learn More
              </div>
            </a>
            <Link to="/episodes">
              <div className="is-link shadowed jumbotron-button button is-medium">
                Listen Now
              </div>
            </Link>
          </ButtonGroup>
        </div>
      </JumboContainer>
    </div>
  </section>
)

export default CallToAction
