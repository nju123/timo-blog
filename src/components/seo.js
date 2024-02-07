import * as React from 'react'
import {graphql,useStaticQuery} from 'gatsby'

// Search Engine Optimization
// 精准表达Title从而提高网页在搜索引擎的排名
const Seo = ({title}) => {
    const data = useStaticQuery(graphql`
    query  {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return(
        <title>{title} | {data.site.siteMetadata.title}</title>
    )
}

export default Seo