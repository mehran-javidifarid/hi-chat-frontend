import React from "react";
import TextField from '@mui/material/TextField';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {styled, Typography} from "@mui/material";
import {AdapterDateFnsJalali} from '@mui/x-date-pickers/AdapterDateFnsJalali';
import moment from 'moment-jalaali';

const StyledTextField = styled(TextField)(({theme}) => ({
    '& .MuiTextField-root': {
        width: '100%',
    },
    '& .MuiInputBase-root': {
        borderRadius: '12px',
        direction: 'ltr',
//        backgroundColor: theme.palette.base[50]
    },
    '& .MuiInputBase-input': {
        padding: '12px 14px'
    }
}))

const CDatepicker = ({value, onChange, placeholder, error, name}: any) => {
    return (
        //@ts-ignore
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
            <DatePicker
                sx={{
                    width: '100%'
                }}
                slotProps={{
                layout:{
                    sx:{
                        '& .MuiPickersArrowSwitcher-root': {
                            direction: 'ltr',
                        },
                    }
                }
            }}
                views={['year', 'month', 'day']}
                closeOnSelect={true}
                //@ts-ignore
                mask="____/__/__"
                label={placeholder}
                value={value}
                onChange={(newValue: any) => onChange({target: {name, value: moment(newValue).format('jYYYYjMMjDD')}})}
                renderInput={(params: any) =>
                    <StyledTextField {...params} name={name} placeholder='test'
                                     inputProps={{...params.inputProps, placeholder}}/>
                }
            />
            <Typography>{error?.[name] && error[name].message}</Typography>
        </LocalizationProvider>
    );
}

export default CDatepicker