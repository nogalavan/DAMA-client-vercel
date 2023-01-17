import { Card, Typography, Stack, Table, TableContainer, TableHead, TableCell, TableRow, TableBody, useTheme } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import {orderBy} from 'lodash';

interface PurchaesItem {
    id: string;
    itemName: string;
    date: string;
    amount: number;
}

// export const purchaesItems = [
//     {
//         id: 1,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: -30
//     },
//     {
//         id: 2,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: 30
//     },
//     {
//         id: 3,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: 30
//     },
//     {
//         id: 4,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: 30
//     },
//     {
//         id: 5,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: -30
//     },
//     {
//         id: 6,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: 30
//     },
//     {
//         id: 7,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: 30
//     },
//     {
//         id: 8,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: 30
//     },
//     {
//         id: 9,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: -30
//     },
//     {
//         id: 10,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: -30
//     },
//     {
//         id: 11,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: 30
//     },
//     {
//         id: 12,
//         name: 'deveops',
//         date: new Date().toLocaleDateString(),
//         amount: 30
//     },
// ];

const PurchasesHistory = () => { 
    const theme = useTheme();
    const [transactions, setTransactions] = useState<PurchaesItem[]>();

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://dama-server-vercel.vercel.app/api/purchasesHistory/getAll')
            .then(response => {setTransactions(response.data);
            });
            
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
    <Stack width='100%' justifyContent='center' alignItems='center'>
        <Card sx={{height: '350px', width: '70%'}}>
            <TableContainer sx={{maxHeight: '350px' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{backgroundColor: theme.palette.info.main}}>Name</TableCell>
                            <TableCell sx={{backgroundColor: theme.palette.info.main}}>Date</TableCell>
                            <TableCell sx={{backgroundColor: theme.palette.info.main}}>Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions && orderBy(transactions, ["date"], ["desc"]).map(({id, itemName, amount, date}, index) => 
                        <TableRow key={index}>
                            <TableCell>{itemName}</TableCell>
                            <TableCell>{date}</TableCell>
                            <TableCell sx={{color: amount > 0 ? 'green' : 'red'}}>{amount}</TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <Stack>
                <Stack direction='row' sx={{m: '10px 0', pr: '15px'}}>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold', width: '215px'}}>שם מוצר</Typography>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold', width: '215px' }}>תאריך רכישה / קנייה</Typography>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold', width: '200px' }}>כמות</Typography>
                </Stack>
                <Stack sx={{maxHeight: '300px', overflow: 'auto'}}>
                    {purchaesItems.map(({name, amount, date}) => 
                    <Stack direction='row' justifyContent='space-around'>
                        <Typography variant='subtitle1'>{name}</Typography>
                        <Typography variant='subtitle1'>{date}</Typography>
                        <Typography variant='subtitle1'>{amount}</Typography>
                    </Stack>)}
                </Stack>
            </Stack> */}
        </Card>
    </Stack>)
}

export default PurchasesHistory;