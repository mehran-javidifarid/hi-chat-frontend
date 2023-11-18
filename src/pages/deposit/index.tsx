import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {deposits, notifications, notificationCategory} from "../../mock-data"
import {Box, Typography} from "@mui/material";
import {CButton} from "../../components";
import {ArrowBackIosNewRounded,MailOutlineRounded} from "@mui/icons-material";
import {SearchIcon} from "../../assets/images/all";
import {styled} from "@mui/material/styles";
import {RialSeparator} from "../../utils/price-separator";
import moment from 'moment-jalaali';

const StyledCard = styled(Box)(({theme}: any) => ({
    display: 'flex',
    margin: '10px 0',
    alignItems: 'center',
    borderRadius: '15px',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    '& .content': {
        display: 'flex',
        alignItems: 'center',
        '& .logo': {
            width: '42px',
            height: '42px',
            borderRadius: '35px',
            border: '1px solid #E0E0E0',
            padding: '10px',
            margin: '0 10px',
            display: 'flex',
            justifyContent: 'center'
        }
    }
}))

const DepositView = () => {
    const params: any = useParams()
    const history: any = useHistory()
    const [deposit, setDeposit] = useState<any>({})

    useEffect(() => {
        setDeposit(deposits?.filter((dep: any) => dep.id === params?.id)[0])
    }, [])

    const handleBack = () => {
        history.push('/')
    }

    const handleTransaction = () => {
        history.push('/notification?bank_id=2')
    }

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                alignItems: 'center',
                height: '100px'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '0 20px'
                }}>
                    <img style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '35px',
                        border: '1px solid #E0E0E0',
                        padding: '10px',
                        margin: '0 10px'
                    }} src={deposit.logo} alt={deposit.name}/>
                    <Typography>{deposit.name}</Typography>
                </Box>
                <CButton color={'inherit'}>
                    <ArrowBackIosNewRounded fontSize={"small"} color={'action'} onClick={handleBack}/>
                </CButton>
            </Box>
            <Box sx={{
                height: 'calc(100vh - 56px - 100px - 30px)',
                backgroundColor: '#fff',
                margin: '15px',
                padding: '10px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Typography ml={1} fontWeight={500}>پیغام ها</Typography>
                        <CButton color={'inherit'}>
                            <img src={SearchIcon} alt="search"/>
                        </CButton>
                    </Box>
                    <Box>
                        {notifications.filter((item) => item.bank_id == deposit.id).slice(0, 6).map((notification) =>
                            <StyledCard key={notification.id}>
                                <Box className={'content'}>
                                    <Box className='logo'>
                                        <MailOutlineRounded />
                                    </Box>
                                    <Box>
                                        <Typography>{notificationCategory[notification?.type]?.name}</Typography>
                                        <Typography
                                            fontSize={'small'}>{moment(notification.date).format('jYYYY/jMM/jDD')} - {notification.time}</Typography>
                                    </Box>
                                </Box>
                                {/*color={category[notification?.type]?.type === 1 ? 'error' : 'success'}*/}
                                <CButton color={'inherit'}>
                                    <Typography>{notification?.type !== 3 ? `${RialSeparator(`${notification.amount}`)} ریال ` : `رمز: ${notification.password} `}</Typography>
                                </CButton>
                            </StyledCard>)}
                    </Box>
                </Box>
                <Box textAlign={"center"}>
                    <CButton variant={'text'} size={'large'} fullWidth onClick={handleTransaction}>
                        بیشتر
                    </CButton>
                </Box>
            </Box>
        </Box>
    )
}

export default DepositView