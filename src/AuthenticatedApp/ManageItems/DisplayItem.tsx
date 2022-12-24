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
                <Typography variant='caption'>שם מוצר</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '16%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.description}</Typography>
                <Typography variant='caption'>תיאור</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.demandRateForYear}</Typography>
                <Typography variant='caption'>קצב ביקוש לשנה</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.orderCost}</Typography>
                <Typography variant='caption'>עלות הזמנה</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.unitPrice}</Typography>
                <Typography variant='caption'>מחיר יחידה</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.annualInterestPerItem}</Typography>
                <Typography variant='caption'>ריבית שנתית לפריט</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.unitHoldingCost}</Typography>
                <Typography variant='caption'>עלות החזקה ליחידה</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '12%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{stockItem.deliveryTime}</Typography>
                <Typography variant='caption'>זמן אספקה (ימים)</Typography>
            </Stack>
        </Stack>)
}

export default DisplayItem;