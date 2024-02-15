import * as React from "react"
import BlogHeadBar from "../../../components/blogHead"
import { Box, Divider, Typography } from "@mui/material"
import Seo from "../../../components/seo"
import { graphql } from "gatsby"
import { LineAxisOutlined } from "@mui/icons-material"
// gatsby-browser.js
require("prismjs/themes/prism.css") // 引入代码高亮

const MusingPost = ({ data, children }) => {
    return (
        <Box>
            <BlogHeadBar></BlogHeadBar>
            <Box sx={{ 
            marginTop: "100px",
            width:"50%",
            marginLeft:"10%",
            }}>
                <Typography variant="h4">{data.mdx.frontmatter.title}</Typography>
                <Typography variant="body" color="grey">{data.mdx.frontmatter.date}</Typography>
                <Divider/>
                <Typography component="div" variant="body1">
                    {children}
                </Typography>
            </Box>


        </Box>
    )
}

// data返回query的结果, children返回md文档的实际内容，这两个都是
// 预定义好的参数！！！
export const query = graphql`
query ($id:String) {
    mdx(id:{eq:$id}) {
      frontmatter {
        date(formatString: "YYYY-MM-D")
        title
        slug
      }
    }
  }
`

export const Head = () => <Seo title="Thoughts" />

export default MusingPost