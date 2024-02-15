import * as React from "react"
import BlogHeadBar from "../../../components/blogHead"
import { Box } from "@mui/material"
import BlogCard from "../../../components/blogcard"
import { graphql } from "gatsby"

// 辅助函数，用于格式化标题为URL路径
const formatTitleForUrl = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-');
  };

const MusingsPage = ({data}) =>{
    return(
        <Box>
            <BlogHeadBar></BlogHeadBar>
            {/*随想博客的主要内容*/}
            <Box sx={{marginTop:"100px"}}></Box> {/*占位*/}
            
            {
               
                data.allMdx.nodes.map(
                    (node) => (
                        <Box sx={{
                            width:"50%",
                            marginLeft:"10%",
                            marginBottom:"20px",
                        }}>
                        <BlogCard key={node.id}
                        title={node.frontmatter.title}
                        date = {node.frontmatter.date}
                        preview={node.excerpt}
                        buttonLink={`/blog/musings/${formatTitleForUrl(node.frontmatter.slug)}`}
                        ></BlogCard>
                        </Box>
                    )
                )
            }
           
            {/*侧边栏*/}
            <Box></Box>
        </Box>
    )
}

export const query = graphql`
query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-D")
          slug
        }
        id
        excerpt
      }
    }
  }
`
export default MusingsPage