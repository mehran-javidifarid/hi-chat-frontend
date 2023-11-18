import React, { useState, FC, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Box } from "@mui/material";
import * as image from "../../assets/images/all"

interface spinnerType {
    isFirst?: boolean
}

const SpinnerView: FC<spinnerType> = (isFirst) => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/intro');
        }, 2000);
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <img width={'250px'} height={'auto'} src={image.Splash} alt="" />
        </Box>
    );
}
export default SpinnerView;
