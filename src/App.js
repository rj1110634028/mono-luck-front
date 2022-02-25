import * as React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar"
import FinishBtn from "./components/FinishBtn"
import LinkRole from "./components/LinkRole"
import TextField_phone from "./components/TextField_phone";
import ToggleBtn from "./components/ToggleBtn";
import Divider from "@mui/material/Divider";
import TextField_phone_error from "./components/TextField_phone_error";
import Container from '@mui/material/Container';
import CheckRole from "./components/CheckRole";
import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <MenuBar />
    <Container >
      
      <div class="input_num_text">請點擊欲租借的鎖櫃編號，可選三項，須至少輸入一項</div>
      <div>
        <ToggleBtn />
      </div>
      <div>選擇鎖櫃:</div>
      <div>
        <Divider variant="middle" />
      </div>
      <div>
        <TextField_phone />
      </div>
      <div>
        <CheckRole />
      </div>
      <div>
        <LinkRole />
      </div>
      <div>
        <FinishBtn />
      </div>
      </Container>
      </Box>
  );
}
export default App;
