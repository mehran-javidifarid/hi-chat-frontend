import React, {FC} from "react";
import {
    TextField, TextFieldProps
} from '@mui/material';
import {styled} from '@mui/material/styles';

const StyledInput = styled(TextField)(({theme}) => ({
    '&& .muirtl-nd808p-MuiInputBase-root-MuiOutlinedInput-root': {
        borderRadius: '8px',
        margin: '12px 0'
    }
}))

const CInput: FC<TextFieldProps> = (props) => <StyledInput {...props}/>

export default CInput
