import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import {CButton, CInput} from "../../../components";
import {MuiOtpInput} from 'mui-one-time-password-input'
import {useDispatch} from "react-redux";

const names = {
    otp: 'otp',
}

const VerifyView = ({next, form}: any) => {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState<any>({
        otp: undefined
    })
    const [formError, setFormError] = useState<any>({})

    const validate = () => {
        let _errors = {}
        let hasError = false
        Object.keys(formValue).map((item: any) => {
            // @ts-ignore
            if (!formValue[item]) {
                // @ts-ignore
                _errors = {..._errors, [item]: `${names[item]} is required`}
                hasError = true
            }
        })
        setFormError(_errors)
        if (!hasError) handleSubmit()
    }

    const handleFormValue = (value: any) => {
        setFormValue({...formValue, ['otp']: value})
    }

    const handleSubmit = () => {
        console.log(formValue)
        next({},3)
    }

    return (
        <>
            <Box sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                padding: '25px',
                justifyContent: 'center',
                direction: 'rtl',
            }}>
                <Typography my={3} mx={2} variant={'body1'} textAlign={'center'}>
                    insert the code we sent to you
                </Typography>
                <MuiOtpInput
                    length={4} TextFieldsProps={{inputProps: {inputMode: 'numeric'}}} autoFocus value={formValue['otp']}
                    onChange={handleFormValue}
                />
                {formError['otp'] ? <Typography my={3} color={'red'} variant={'caption'} textAlign={'center'}>
                    {formError['otp']}
                </Typography> : ''}
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '15px 24px'
            }}>
                <CButton variant={'contained'} color={'primary'} onClick={validate}>
                    submit
                </CButton>
            </Box>
        </>
    )
}

export default VerifyView