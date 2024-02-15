import * as React from "react"
import { AppBar, Button, Toolbar, Typography,Box } from "@mui/material"
import { Link } from "gatsby"

const ButtonStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "none", //移除按钮文本的大写转换
}
const BlogHeadBar = () =>{
    return (
    <AppBar position="fixed">
        <Toolbar>
            {/*flexGrow:1 表示该元素将占据所有剩余空间，从而将后面的Button推到右边*/}
            <Typography variant="h6" sx={{flexGrow:1}}>
                Timo's Blog
            </Typography>
            {/*这里需要解释一下
            1.conponent={Link}的含义：
            component属性可以指定该按钮应该渲染为哪种类型的元素或组件。
            当你将component属性设置为Gatsby的Link组件时，你实际上是告诉Button组件，它应该表现得像一个链接，而不是一个普通的按钮。
            2.这样做的好处：
                （1）性能优化:无刷新跳转【Gatsby为你做的】
                （2）利于SEO:Search Engine Optimization, 提高搜索排名*/}
            <Box display="flex" justifyContent="flex-end"
            sx={{
                fontSize:"20px",
                fontWeight:"bold"
            }}>
            <Button color="inherit" component={Link} to="/" sx={ButtonStyle}>主页</Button>
            <Button color="inherit" component={Link} to="/about" sx={ButtonStyle}>关于</Button>
            <Button color="inherit" component={Link} to="/blog/musings" sx={ButtonStyle}>随想</Button>
            </Box>
        </Toolbar>

    </AppBar>
    )
}
export default BlogHeadBar;