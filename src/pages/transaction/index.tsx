import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import {CButton} from "../../components";
import {ArrowBack, Search} from "@mui/icons-material";
import {useHistory, useParams} from "react-router-dom";
import {transactionCategory, deposits, transactions} from "../../mock-data";
import {styled} from "@mui/material/styles";
import qs from "query-string";
import {RialSeparator} from "../../utils/price-separator";

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

const TransactionView = () => {
    const params: any = useParams()
    const history: any = useHistory()
    const [deposit, setDeposit] = useState<any>({})
    const [query, setQuery] = useState<any>(qs.parse(history.location.search))

    useEffect(() => {
        setDeposit(deposits?.filter((dep: any) => dep.id === query?.bank_id)[0])
    }, [])

    const handleBack = () => {
        history.push('/')
    }

    return (
        <Box sx={{
            display: 'flex',
            height: '100%',
            backgroundColor: '#fff',
        }}>
            <Box sx={{
                position: 'absolute',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                padding: '5px',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                zIndex: '99',
                borderBottom: '1px solid #EEEEEE'
            }}>
                <CButton variant={'text'} color={'inherit'}>
                    <Search/>
                </CButton>
                <Typography variant={'body1'} display={'flex'} alignItems={'center'}>تراکنش ها</Typography>
                <CButton variant={'text'} color={'inherit'} onClick={handleBack}>
                    <ArrowBack/>
                </CButton>
            </Box>
            <Box sx={{
                marginTop: '50px',
                width: '100%',
            }}>
                {transactions.filter((item: any) => item.bank_id == deposit?.id).map((transaction: any) =>
                    <StyledCard key={transaction.id}>
                        <Box className={'content'}>
                            <Box className='logo'>
                                <img
                                    src={transactionCategory[transaction?.type]?.logo}
                                    alt={deposit.name}/>
                            </Box>
                            <Box>
                                <Typography>{transactionCategory[transaction?.type]?.name}</Typography>
                                <Typography>{transaction.date} - {transaction.time}</Typography>
                            </Box>
                        </Box>
                        <CButton color={transactionCategory[transaction?.type]?.type === 1 ? 'error' : 'success'}>
                            <Typography>{RialSeparator(`${transaction.amount}000`)} ریال </Typography>
                        </CButton>
                    </StyledCard>
                )}
            </Box>
        </Box>
    )
}

export default TransactionView