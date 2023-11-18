import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import {CButton, CInput} from "../../../components";
import {fetchLoginAction} from "../../../redux/authentication/actions";
import {useDispatch} from "react-redux";

const names = {
     password: 'password',
}

const ProfileView = ({next}: any) => {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState<any>({
        password: undefined,
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
        console.log(formValue)
        if (formValue.password === formValue.confirm_password)
            dispatch(fetchLoginAction({access:"true"}))
        else
            setFormError({...formError, ['confirm_password']: 'confirm password is wrong'})
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
                justifyContent: 'center'
            }}>
                <Typography my={3} mx={2} variant={'body1'} textAlign={'center'}>
                    set a password for yourself
                </Typography>
                <CInput
                    name={'password'} value={formValue['password']} error={!!formError['password']}
                    helperText={formError['password']} fullWidth placeholder={'password'} type={'password'}
                    onChange={handleFormValue}
                />
                <CInput
                    name={'confirm_password'} value={formValue['confirm_password']}
                    error={!!formError['confirm_password']}
                    helperText={formError['confirm_password']} fullWidth placeholder={'confirm password'}
                    type={'password'}
                    onChange={handleFormValue}
                />
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

export default ProfileView