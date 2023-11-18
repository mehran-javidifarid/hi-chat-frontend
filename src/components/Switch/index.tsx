import React from "react";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from '@mui/material/styles';

const CSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props}  />
))(({ theme }) => ({

}));

export default CSwitch;