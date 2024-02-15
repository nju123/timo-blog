import * as React from "react"
import BlogHeadBar from "../../../components/blogHead"
import { Box } from "@mui/material"
import BlogCard from "../../../components/blogcard"

const MusingsPage = () =>{
    return(
        <Box>
            <BlogHeadBar></BlogHeadBar>
            {/*随想博客的主要内容*/}
            <Box sx={{
                marginTop:"100px",// appbar设置了fixed，需要避免被覆盖
                width:"50%",
                marginLeft:"10%"
            }}>
            <BlogCard></BlogCard>
            
            </Box>

            {/*侧边栏*/}
            <Box></Box>
        </Box>
    )
}

export default MusingsPage