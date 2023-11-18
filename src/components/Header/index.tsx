import React, {FC} from 'react';
import {AppBar, Toolbar} from "@mui/material";
import {LogoLightIcon} from "../../assets/images/all";

const Header: FC = () => {
    return (
        <AppBar position="static" sx={{
            backgroundColor: "inherit !important",
            color: "black",
            boxShadow: "none !important",
            padding: '10px 5px'
        }}>
            <Toolbar>
                <img src={LogoLightIcon} alt="" width={"62px"}/>
            </Toolbar>
        </AppBar>
    );
}
export default Header