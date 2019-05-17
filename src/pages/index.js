import React from "react"
import Layout from "../components/layout"
import Jumbotron from "../components/Home/Jumbotron"
import About from "../components/Home/About"
import HowItWorks from "../components/Home/HowItWorks"
import CallToAction from "../components/Home/CallToAction"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Jumbotron />
    <About />
    <HowItWorks />
    <CallToAction />
  </Layout>
)

export default IndexPage
