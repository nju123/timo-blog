import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { Avatar, Box, Button } from '@mui/material'
import {HomeCard,HomeCardBig} from '../components/homecard'
import { CenterFocusStrong } from '@mui/icons-material'

const IndexPage = () => {
  return (
    <Box>
      

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop:"10%",
      }}>


        <Box sx={{
          position:"fixed",
          width: "50%",
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
          alignItems: 'left',
          width: "50%",
          height: "100%",
          margin: 'auto',
          marginLeft:"50%", //因为左边的profile格子设置position为fixed，排版会乱，使用marginLeft来替代原来的效果
        }}>
          <HomeCardBig color="#007FFF" headText="Timo" buttonText="了解更多">
            <h3 style={{color:"white"}}>改变现状的Loser</h3>
          </HomeCardBig>
          <HomeCard color="black" headText="GitHub" buttonText="去逛逛" buttonLink="https://github.com/nju123"></HomeCard>
          <HomeCard color="#FF6699" headText="B站" buttonText="去逛逛" buttonLink="https://space.bilibili.com/457257865?spm_id_from=333.1007.0.0"></HomeCard>
          <HomeCard color="#007FFF" headText="博客" buttonText="去逛逛" buttonLink="\blog">
            
          </HomeCard>
        </Box>

      </Box>

    </Box>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage