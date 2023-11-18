import React, {FC} from "react";
import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {deposits} from "../../mock-data"
import {CButton} from "../../components";
import {ArrowBackIosNewRounded} from "@mui/icons-material"
import {useHistory} from "react-router-dom";

const StyledCard = styled(Box)(({theme}) => ({
    display: 'flex',
    margin: '10px',
    alignItems: 'center',
    borderRadius: '15px',
    backgroundColor: '#fff',
    padding: '10px',
    justifyContent: 'space-between',
    '& .content': {
        display: 'flex',
        alignItems: 'center',
        '& img': {
            width: '42px',
            height: '42px',
            borderRadius: '35px',
            border: '1px solid #E0E0E0',
            padding: '10px',
            margin: '0 10px'
        }
    }
}))

const Home: FC = () => {
    const history = useHistory()

    const handleDepositNavigate = (id:any) => {
        history.push(`/deposit/${id}`)
    }

    return (
        <Box>
            {deposits.map(({logo, name, id}) =>
                <StyledCard key={id} onClick={() => handleDepositNavigate(id)}>
                    <Box className={'content'}>
                        <img src={logo} alt={name}/>
                        <Typography>{name}</Typography>
                    </Box>
                    <CButton color={'inherit'}>
                        <ArrowBackIosNewRounded fontSize={"small"} color={'action'}/>
                    </CButton>
                </StyledCard>
            )}

        </Box>
    );
};

export default Home