import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () =>{
    return(
        <Layout pageTitle="About ME">
            <p>Hi there! I am the owner of this blog.</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage