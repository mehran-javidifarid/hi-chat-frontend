import React, {FC, useState} from "react";
import {Box, Typography} from "@mui/material";
import {CButton, CInput} from '../../components';
import * as images from '../../assets/images/all';
import {useDispatch} from "react-redux";
import {fetchLoginAction} from "../../redux/authentication/actions";

const names = {
    username: 'username',
    password: 'password',
}

const LoginView: FC = () => {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState<any>({
        "username": undefined,
        "password": undefined,
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

    const handleFormValue = ({target: {name, value}}: any) => {
        setFormValue({...formValue, [name]: value})
    }

    const handleSubmit = () => {
        dispatch(fetchLoginAction({access:'true'}))
        console.log(formValue)
    };

    return (
        <Box sx={{
            display: 'flex',
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
                padding: '25px'
            }}>
                <Box sx={{
                    padding: '20% 30%'
                }}>
                    {/* <img src={images.LogoLightIcon} alt="intro"/> */}
                </Box>
                <Typography my={3} variant={'body1'}>insert your username and password</Typography>
                <CInput
                    fullWidth helperText={formError['username']} error={!!formError['username']} name={'username'}
                    value={formValue['username']} placeholder={'username'} onChange={handleFormValue} inputMode={'numeric'} inputProps={{inputMode:'numeric'}}
                />
                <CInput
                    fullWidth helperText={formError['password']} error={!!formError['password']} name={'password'}
                    value={formValue['password']} placeholder={'password'} type={'password'} onChange={handleFormValue}
                />
                <CButton variant={'text'} color={'primary'}>
                    forget your password?
                </CButton>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '15px 24px'
            }}>
                <CButton variant={'contained'} color={'primary'} onClick={validate}>
                    login
                </CButton>
            </Box>
        </Box>
    );
}

export default LoginView
