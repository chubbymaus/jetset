import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import Fade from "react-reveal"
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .button {
    width: 350px;
    margin: 5px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`
const JumboContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Jumbotron = () => (
  <section
    className="hero has-background-white is-fullheight is-bold"
    id="jumbotron"
  >
    <div className="container is-fluid has-text-left">
      <JumboContainer>
        <div className="hero-text">
          <h1 className="has-text-white title">Jumbotrontext</h1>
          <h2 className="has-text-weight-light subtitle has-text-white">
            Collaborate, store, and share faster, safer, and more transparently
          </h2>

          <ButtonGroup>
            <Fade up>
              <a href="#about">
                <div className="is-info jumbotron-button button first_button shadowed is-medium">
                  Learn More
                </div>
              </a>
              <Link to="/deals">
                <div className="is-link shadowed jumbotron-button button is-medium">
                  View Deals
                </div>
              </Link>
            </Fade>
          </ButtonGroup>
        </div>
      </JumboContainer>
    </div>
  </section>
)

export default Jumbotron
