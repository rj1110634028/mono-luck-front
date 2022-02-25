import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import * as React from "react";

function ToggleBtn() {
    const [formats, setFormats] = React.useState("");
  
    const handleFormat = (event, newFormats) => {
      setFormats(newFormats);
    };
  
    return (
      <ToggleButtonGroup value={formats} onChange={handleFormat}>
        <ToggleButton value="0" class="num_class">
          00
        </ToggleButton>
        <ToggleButton value="1" class="num_class">
          01
        </ToggleButton>
        <ToggleButton class="disable_class" disabled></ToggleButton>
        <ToggleButton class="disable_class" disabled></ToggleButton>
        <ToggleButton class="disable_class" disabled></ToggleButton>
        <ToggleButton class="disable_class" disabled></ToggleButton>
        <ToggleButton value="2" class="num_class">
          02
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
  export default ToggleBtn;