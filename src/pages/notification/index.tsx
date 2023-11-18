import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import {CButton} from "../../components";
import {ArrowBack, Search} from "@mui/icons-material";
import {useHistory, useParams} from "react-router-dom";
import {notificationCategory, deposits, notifications} from "../../mock-data";
import {styled} from "@mui/material/styles";
import qs from "query-string";
import moment from 'moment-jalaali';
import {v4 as uuidv4} from 'uuid'
import {MailOutlineRounded} from "@mui/icons-material";
import { ApplicationState } from "../../redux";
import { useSelector } from "react-redux";


const NotificationView = () => {

    return (
        <Box sx={{
        }}>
            
        </Box>
    )
}

export default NotificationView