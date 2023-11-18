import {useState} from "react";
import {Box, Typography} from "@mui/material";
import {CButton, CInput} from "../../../components";

const names = {
    mobile: 'mobile',
}

const InfoView = ({next}: any) => {
    const [formValue, setFormValue] = useState<any>({
        mobile: undefined,
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
        next({},2)
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
                    insert your phone number for verification
                </Typography>
                <CInput
                    name={'mobile'} value={formValue['mobile']} error={!!formError['mobile']}
                    helperText={formError['mobile']} fullWidth placeholder={'mobile'}
                    onChange={handleFormValue} inputProps={{inputMode: 'numeric'}}
                />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '15px 24px'
            }}>
                <CButton variant={'contained'} color={'primary'} onClick={validate}>
                    send otp
                </CButton>
            </Box>
        </>
    )
}

export default InfoView