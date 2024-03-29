import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'; // 注意这里的导入方式
import { Link } from 'gatsby';

const HomeCardSmall = ({ color, headText, buttonText, buttonLink }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 160,
          height: 160,
        },
      }}
    >
      <Paper elevation={3} sx={{
         p: 2,
         backgroundColor: color, 
         position: 'relative',// 设置相对定位
         // position: 'relative' 设置在 Paper 组件上的作用是为内部绝对定位的 Box 组件提供一个定位上下文
         // 父元素Relative 子元素absolute定位就是相对于父元素的
         width: "100%", // 确保Paper填满Box容器
         height: "100%",
         }}> {/* 添加padding和背景色 */}
        <h1 style={{ color: "white" }}>{headText}</h1> {/* 使用style属性而不是sx */}
        <Box sx={{
            position:'absolute',//绝对定位
            bottom:20,
            right:20,
        }}>
             <Button variant='contained' component={Link} to={buttonLink}>{buttonText}</Button>
        </Box>
      </Paper>
    </Box>
  );
}

const HomeCardBig = ({ color, headText, buttonText, buttonLink,children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 575,
          height: 158,
        },
      }}
    >
      <Paper elevation={3} sx={{
         p: 2,
         backgroundColor: color, 
         position: 'relative',// 设置相对定位
         // position: 'relative' 设置在 Paper 组件上的作用是为内部绝对定位的 Box 组件提供一个定位上下文
         // 父元素Relative 子元素absolute定位就是相对于父元素的
         width: "100%", // 确保Paper填满Box容器
         height: "100%",
         }}> {/* 添加padding和背景色 */}
        <h1 style={{ color: "white" }}>{headText}</h1> {/* 使用style属性而不是sx */}
        {children}
        <Box sx={{
            position:'absolute',//绝对定位
            bottom:20,
            right:20,
        }}>
             <Button variant='contained' component={Link} to={buttonLink}>{buttonText}</Button>
        </Box>
      </Paper>
    </Box>
  );
}

export {HomeCardSmall,HomeCardBig};