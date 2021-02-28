import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import {withPrefix} from 'gatsby'

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <div className="container">
    <object data={withPrefix('/resume_feb_2021pdf')} type="application/pdf" width="700px" height="700px">
    <embed src={withPrefix('/resume_feb_2021.pdf')}>
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href={withPrefix('/resume_may_2020_internship.pdf')}>Download PDF</a>.</p>
    </embed>
</object>
    </div>
  </Layout>
)

export default ResumePage;