import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const About = () => (
  <div className="is-fullheight">
    <div className="about-wrapper has-background-info" id="about">
      <div className="container is-fluid">
        <h1 className="title is-center has-text-white has-text-weight-bold has-text-centered">
          WHAT WE DO
        </h1>
        <h2 className="has-text-centered has-text-white subtitle">
          Here at Inferno we focus on building beautiful websites and <br />{" "}
          mobile apps to with ease of maintainability in mind.
        </h2>
        <div className="columns">
          <div className="column is-half">
            <div className="card has-background-white">
              <div className="card-content has-text-primary">
                <div className="title has-text-primary">
                  <FontAwesomeIcon
                    style={{ fontSize: "2.5rem" }}
                    icon={["far", "comments"]}
                  />
                  &nbsp; Planning
                </div>
                <hr />
                <div className="content">
                  <p>
                    Everything your team needs to collaborate in one secure
                    place. Chat, share and store files with the security you
                    need
                  </p>
                  <ul>
                    <li>Chat/File Sharing</li>
                    <li>App Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="card shadowed has-background-white">
              <div className="card-content has-text-primary">
                <div className="title has-text-primary">
                  <FontAwesomeIcon
                    style={{ fontSize: "2.5rem" }}
                    icon={["far", "exchange"]}
                  />
                  &nbsp; Graphic Design
                </div>
                <hr />
                <div className="content">
                  <p>
                    Reduce reliance on trusted intermediaries and lower
                    transaction costs.
                  </p>
                  <ul>
                    <li>Smart Contracts</li>
                    <li>Smart Contracts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <div className="card has-background-white">
              <div className="card-content has-text-primary">
                <div className="title has-text-primary">
                  <FontAwesomeIcon
                    style={{ fontSize: "2.5rem" }}
                    icon={["far", "comments"]}
                  />
                  &nbsp; Development
                </div>
                <hr />
                <div className="content">
                  <p>
                    Everything your team needs to collaborate in one secure
                    place. Chat, share and store files with the security you
                    need
                  </p>
                  <ul>
                    <li>Chat/File Sharing</li>
                    <li>App Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="card shadowed has-background-white">
              <div className="card-content has-text-primary">
                <div className="title has-text-primary">
                  <FontAwesomeIcon
                    style={{ fontSize: "2.5rem" }}
                    icon={["far", "exchange"]}
                  />
                  &nbsp; Strategy
                </div>
                <hr />
                <div className="content">
                  <p>
                    Reduce reliance on trusted intermediaries and lower
                    transaction costs.
                  </p>
                  <ul>
                    <li>Smart Contracts</li>
                    <li>Smart Contracts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
