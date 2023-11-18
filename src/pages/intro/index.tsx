import React, {FC, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Box, Typography, SwipeableDrawer} from "@mui/material";
import {CButton} from '../../components';
import * as images from '../../assets/images/all';
import {Close} from '@mui/icons-material'
const IntroView: FC = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false)

    const loginNavigator = () => {
        history.push('/login');
    }

    const registerNavigator = () => {
        history.push('/register');
    }

    const registerHandler = () => {
        setOpen(!open)
    }

    return (
        <Box sx={{
            display: 'flex',
            backgroundColor: '#3462CD',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Box sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                padding: '25px',

            }}>
                <img src={images.Splash} alt="intro" width="100px" height="100px"/>
                <Typography my={3} variant={'h5'} color={'white'}>ChatAppWithHamed</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '15px 24px'
            }}>
                <CButton variant={'contained'} color={'secondary'} onClick={registerHandler}>
                    Register
                </CButton>
                <CButton variant={'text'} color={'secondary'} onClick={loginNavigator}>Login</CButton>
            </Box>
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={registerHandler}
                onOpen={registerHandler}
                ModalProps={{
                    keepMounted: true,
                }}
                swipeAreaWidth={0}
                disableSwipeToOpen={false}
                sx={{
                    direction:'ltr',
                    '&& .MuiDrawer-paper': {
                        height:'95vh',
                        borderRadius:'20px 20px 0 0'
                    }
                }}
            >
                <Box>
                    <CButton variant={'text'} color={'primary'} onClick={registerHandler}>
                        <Close/>
                    </CButton>
                </Box>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-around',
                    height:'100%',
                    padding:'20px'
                }}>
                    <Typography textAlign={'center'} variant={'h6'}></Typography>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center'
                    }}>
                        <Box sx={{
                            marginRight: '21px',
                            display: 'flex',
                        }}>
                            <img src={images.BoxIcon} alt=""/>
                        </Box>
                        <Box >
                            <Typography variant={'h6'}>some text about the chat</Typography>
                            <Typography variant={'body1'}>some text about the chat some text about the chat some text about the chat some text about the chat</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center'
                    }}>
                        <Box sx={{
                            marginRight: '21px',
                            display: 'flex',
                        }}>
                            <img src={images.BookOpenIcon} alt=""/>
                        </Box>
                        <Box>
                            <Typography variant={'h6'}>some text about the chat feature</Typography>
                            <Typography variant={'body1'}>some text about the chat some text about the chat some text about the chat some text about the chat</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-between'
                    }}>
                        <Box sx={{
                            marginRight: '21px',
                            display: 'flex',
                        }}>
                            <img src={images.CalendarIcon} alt=""/>
                        </Box>
                        <Box>
                            <Typography variant={'h6'}>some text about the chat feature</Typography>
                            <Typography variant={'body1'}>some text about the chat some text about the chat some text about the chat some text about the chat</Typography>
                        </Box>
                    </Box>
                    <CButton variant={'contained'} color={'primary'} fullWidth onClick={registerNavigator}>
                        continuous
                    </CButton>
                </Box>
            </SwipeableDrawer>
        </Box>
    );
}

export default IntroView;