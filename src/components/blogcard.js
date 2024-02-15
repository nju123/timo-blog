import * as React from "react"
import { Box, Card, CardContent, Typography,CardActions, Button } from "@mui/material"
import { Link } from "gatsby"

// 一个BlogCard存放一个Blog的概览信息
const BlogCard = ({title, date, preview,buttonLink}) => {
    return (
        <Box>
            <Card>
                <CardContent>
                {/*variant解释：负责修改字体的样式
                    h5 : 以h5展示
                    body2：一种较小的正文*/}
                <Typography variant="h5" component="div" color="Highlight">
                    {title}
                </Typography>

                    {/*gutterBottom解释：这个属性会在组件的底部添加一些额外的空间，通常用于在文本块之间创建间距。*/}
                    <Typography gutterBottom variant="body" component="div" color="GrayText">
                        {date}
                    </Typography>
                    {/*text.secondary解释：MUI预定义的一种较浅的颜色*/}
                    <Typography variant="body2" color="text.secondary">
                        {preview}
                    </Typography>
                </CardContent>

                 {/*justifyContent解释：justify-content 是一个 CSS Flexbox 属性，它用于设置弹性容器内项目在主轴（flex container's main axis）上的对齐方式。
                 常见属性值：flex-end, flex-start
                 CardActions默认已经是一个弹性属性了（display:"flex"）*/}
                <CardActions sx={{
                   
                    justifyContent:"flex-end"
                }}>
                    <Button size="small" component={Link} to={buttonLink}>全文</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
export default BlogCard