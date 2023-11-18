import React, { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Button } from "@mui/material";

interface componentProps {
    icon: any
    text: string
}

const Options: FC<componentProps> = ({icon, text}) => {
    const classes = useStyles();

    return (

        <Box className={classes.opt} >
            <Box className={classes.options}>
                <Button style={{ width: "100%", height: "100%" }}><img src={icon} alt="" width="30px" /></Button>
            </Box>
            <Typography className={classes.act}>{text}</Typography>
        </Box>

    );
};

export default Options;

const useStyles = makeStyles((theme: any) => ({
    options: {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        boxShadow: "rgb(0 0 0 / 23%) 0px 0px 10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.palette.mode === "light" ? "white" : `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
        overflow: "hidden"
    },
    opt: {
        marginTop: "80px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    act: {
        color: theme.palette.text.primary,
        fontWeight: "bold"
    }
}))