import * as React from "react";
import "./homepage.css";
import MenuBar from "./components/MenuBar"
import CheckBtn from "./components/CheckBtn"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function homepage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <MenuBar barName="首頁"/>
    <Container >
      
      <div class='homepage_img'>
        <img src={require("./image/mono_logo.png")} alt="mono_logo"/>
      </div>
      <div class='check_btn'>
        <CheckBtn butName="鎖櫃登記"/>
      </div>
      <div class='check_btn'>
        <CheckBtn butName="登記查詢"/>
      </div>
      </Container>
      </Box>
  );
}
export default homepage;