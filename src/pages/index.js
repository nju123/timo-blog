import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { AppBar, Avatar, Box, Button } from '@mui/material'
import {HomeCardSmall,HomeCardBig} from '../components/homecard'
import { CenterFocusStrong } from '@mui/icons-material'
import BlogHeadBar from '../components/blogHead'
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  return (
    <Box>
      <BlogHeadBar></BlogHeadBar>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:"row",
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
          flexDirection: 'Row', // 横向排列
          flexWrap:"wrap", // 必要时换行
          alignItems: 'left',
          width: "50%",
          height: "100%",
          margin: 'auto',
          marginLeft:"50%", //因为左边的profile格子设置position为fixed，排版会乱，使用marginLeft来替代原来格子的填充
        }}>
          <HomeCardBig color="#ABD4F7" headText="Timo" buttonText="了解更多">
            <h3 style={{color:"#262626"}}>Friends / Modern Faimly / Shameless</h3>
          </HomeCardBig>
          <HomeCardSmall color="black" headText="GitHub" buttonText="去逛逛" buttonLink="https://github.com/nju123"></HomeCardSmall>
          <HomeCardSmall color="#4D79C7" headText="B站" buttonText="去逛逛" buttonLink="https://space.bilibili.com/457257865?spm_id_from=333.1007.0.0"></HomeCardSmall>
          <HomeCardSmall color="#8aa4e3" headText="博客" buttonText="去逛逛" buttonLink="/blog">
            
          </HomeCardSmall>
        </Box>

      </Box>
      
      
      
    </Box>
  )
}

export const Head = () => <Seo title="Home Page" />



export default IndexPage