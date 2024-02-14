import * as React from "react"
import { AppBar, Toolbar, Typography } from "@mui/material"

const BlogHeadBar = () =>{
    return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">
                Timo's Blog
            </Typography>
        </Toolbar>
    </AppBar>
    )
}
export default BlogHeadBar;