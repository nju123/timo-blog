import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { Button } from '@mui/material'
import HomeCard from '../components/homecard'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Button variant='contained'>Hello World!</Button>
      <HomeCard color="black" headText="GitHub" buttonText="去逛逛" buttonLink="https://github.com/nju123"></HomeCard>
      <StaticImage
        alt="ocean"
        src="https://images.unsplash.com/photo-1587502536575-6dfba0a6e017?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8c2VhfGVufDB8fDB8fHww"
      />
      <p></p>
      <StaticImage
      alt="A cut puppy"
      src="../images/cutePuppy.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage