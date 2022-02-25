import MenuIcon from "@material-ui/icons/Menu";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
function MenuBar() {
  return (
    
      <AppBar class="bar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">鎖櫃登記</Typography>
        </Toolbar>
      </AppBar>
  );
}
export default MenuBar;
