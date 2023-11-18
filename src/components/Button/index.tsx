import React, {FC} from "react";
import {Button, ButtonProps} from '@mui/material';
import {styled} from '@mui/material/styles';

const StyledButton = styled(Button)(({theme}) => ({
    borderRadius: '8px',
    height:'48px',
}))

const CButton: FC<ButtonProps> = ({children, ...props}) => <StyledButton {...props}>
    {children}
</StyledButton>


export default CButton
