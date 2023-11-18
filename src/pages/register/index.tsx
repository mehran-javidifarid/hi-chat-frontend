import React, {FC, useState} from "react";
import {Box, Typography} from "@mui/material";
import {CButton, CInput} from '../../components';
import {ArrowBack} from "@mui/icons-material";
import {useHistory} from "react-router-dom";
import InfoView from "./info";
import VerifyView from "./verify";
import ProfileView from "./profile";

const headerName: any = {
    1: 'profile',
    2: 'verify ',
    3: 'profile'
}

const RegisterView: FC = () => {
    const history = useHistory()
    const [step, setStep] = useState<number>(1)
    const [form, setForm] = useState<any>({})

    const handleStep = (data:any,page:number) => {
        setStep(page)
        setForm({...form,...data})
    }

    const handleBack = () => {
        if (step === 1)
            history.push('/intro')
        else
            setStep(step - 1)
    }

    return (
        <Box sx={{
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: '5px',
                justifyContent: 'space-between'
            }}>
                <Box sx={{width: '64px'}}></Box>
                <Typography variant={'body1'} display={'flex'} alignItems={'center'}>{headerName[step]}</Typography>
                <CButton variant={'text'} color={'primary'} onClick={handleBack}>
                    <ArrowBack/>
                </CButton>
            </Box>
            {step === 1 && <InfoView next={handleStep}/>}
            {step === 2 && <VerifyView next={handleStep} form={form}/>}
            {step === 3 && <ProfileView next={handleStep} form={form}/>}
        </Box>
    );
}

export default RegisterView
