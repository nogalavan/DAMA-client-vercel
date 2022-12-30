import { Stack, Typography, Divider, Chip, Avatar, TextField } from "@mui/material";
import { StockItem } from "../../types/StockItem";

interface DisplayItemProps {
    stockItem: StockItem;
}

const DisplayItem = ({stockItem}: DisplayItemProps) => { 
    return (
        <Stack direction='row' sx={{ width: '100%' }}>
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.name}</Typography>
                <Typography variant='caption'>Name</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '16%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.description}</Typography>
                <Typography variant='caption'>Description</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.demandRateForYear}</Typography>
                <Typography variant='caption'>Demand rate for year</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.orderCost}</Typography>
                <Typography variant='caption'>Order cost</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.unitPrice}</Typography>
                <Typography variant='caption'>Unit price</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.annualInterestPerItem}</Typography>
                <Typography variant='caption'>Annual interest per item</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.unitHoldingCost}</Typography>
                <Typography variant='caption'>Unit holding cost</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.deliveryTime}</Typography>
                <Typography variant='caption'>Delivery time (days)</Typography>
            </Stack>
        </Stack>)
}

export default DisplayItem;