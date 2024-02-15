import * as React from "react"
import { Box, Card, CardContent, Typography } from "@mui/material"

// 一个BlogCard存放一个Blog的概览信息
const BlogCard = () => {
    return (
        <Box>
            <Card>
                <CardContent>
                <Typography variant="h5" component="div">
                    This is my blog title.
                </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
export default BlogCard