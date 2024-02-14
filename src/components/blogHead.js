import * as React from "react"
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { Link } from "gatsby";

const BlogHeadBar = () =>{
    return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">
                Timo's Blog
            </Typography>
            {/*这里需要解释一下
            1.conponent={Link}的含义：
            component属性可以指定该按钮应该渲染为哪种类型的元素或组件。
            当你将component属性设置为Gatsby的Link组件时，你实际上是告诉Button组件，它应该表现得像一个链接，而不是一个普通的按钮。
            2.这样做的好处：
                （1）性能优化:无刷新跳转【Gatsby为你做的】
                （2）利于SEO:Search Engine Optimization, 提高搜索排名*/}
            <Button color="inherit" component={Link} to="/blog">博客</Button>

        </Toolbar>

    </AppBar>
    )
}
export default BlogHeadBar;