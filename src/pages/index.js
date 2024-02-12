import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { Avatar, Box, Button } from '@mui/material'
import HomeCard from '../components/homecard'
import { CenterFocusStrong } from '@mui/icons-material'

const IndexPage = () => {
  return (
    <Box>
      <Layout pageTitle="Home Page">
      </Layout>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        // '& > Box':{
        //   flex: '1 1 50%',
        //   padding:'8px',
        // }
      }}>


        <Box sx={{
          width: "30%",
          height: "100%",
          alignItems: 'center',
          textAlign: "center"
        }}>
          <StaticImage
            src="../images/cutePuppy.jpg"
            alt="puppy"
            placeholder="blurred"
            width={350}
            style={{ borderRadius: '50%' }}
          />
          <h1>Timo</h1>
          <h3>For You To Be Here.</h3>


        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'Column',
          alignItems: 'center',
          width: "70%",
          height: "100%",
          margin: 'auto',
        }}>
          <HomeCard color="black" headText="GitHub" buttonText="去逛逛" buttonLink="https://github.com/nju123"></HomeCard>
          <HomeCard color="#FF6699" headText="B站" buttonText="去逛逛" buttonLink="https://space.bilibili.com/457257865?spm_id_from=333.1007.0.0"></HomeCard>
        </Box>

      </Box>

    </Box>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage