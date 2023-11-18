import React from "react";
import { Avatar, Box, Typography, Switch, Collapse, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';

const ProfileView = () => {
    const { mobile } = useSelector(({ authentication }: ApplicationState) => authentication)

    const handleLogout = () => {
        window.localStorage.clear();
        window.location.reload();
    }

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '*': {
                    margin: '10px'
                }
            }}>
                <Avatar sx={{ width: '80px', height: '80px' }} />
                <Typography variant={'h5'} color={'black'}>Mehran Javidifarid</Typography>
                <Typography>{mobile}</Typography>
            </Box>
            <Box sx={{
                margin: '20px 10px'
            }}>
                <Accordion sx={{
                    backgroundColor: '#00000000',
                    boxShadow: 'none',
                }}>
                    <AccordionSummary expandIcon={<KeyboardArrowRightRounded />}>
                        <Typography>change password</Typography>
                    </AccordionSummary>
                </Accordion>
                <Accordion sx={{
                    backgroundColor: '#00000000',
                    boxShadow: 'none',

                }}>
                    <AccordionSummary
                        expandIcon={<KeyboardArrowRightRounded />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        onClick={handleLogout}
                    >
                        <Typography>logout</Typography>
                    </AccordionSummary>
                </Accordion>
            </Box>
        </Box>
    )
}

export default ProfileView