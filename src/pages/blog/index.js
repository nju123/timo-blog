import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql,Link } from 'gatsby'
import BlogHeadBar from '../../components/blogHead'
import { Box } from '@mui/material'

const BlogPage = ({data}) => {
        {/*<Layout pageTitle="My Blog Posts">
            <p>My cool posts are as follows.</p>
            <ul>
                {
                    data.allMdx.nodes.map((node) =>
                    (
                        <article key = {node.id}>
                            <h2>
                              <Link to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                              </Link>
                            </h2>
                            <p>Posted:{node.frontmatter.date}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    ))
                }
            </ul>
        </Layout>*/}
       return(
        <Box>
          <BlogHeadBar></BlogHeadBar>
          {/*博客主页的内容*/}
          <Box></Box>
        </Box>
       )
    
}
// export const query = graphql`
// query {
//     allMdx (sort:{frontmatter:{date:DESC}}){
//       nodes {
//         frontmatter {
//           date(formatString: "MMMM D, YYYY")
//           title
//           slug
//         }
//         id
//         excerpt
//       }
//     }
//   }
// `

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage
