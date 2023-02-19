import { Stack, Typography, Divider, Chip, Avatar, TextField } from "@mui/material";
import { StockItem } from "../../types/StockItem";

interface DisplayItemProps {
    stockItem: StockItem;
}

const orderPoint = (demandRateForYear: number, deliveryTime: number) => demandRateForYear*(deliveryTime/340);

const amountToOrder = (demandRateForYear: number, orderCost: number, unitHoldingCost: number) => Math.round(Math.sqrt((2*demandRateForYear*orderCost)/unitHoldingCost)); 

const DashboardItem = ({stockItem} : DisplayItemProps) => { 

    const statusColor = () => stockItem.amount <= Math.round(orderPoint(stockItem.demandRateForYear, stockItem.deliveryTime)) ? 'red' : 'black';

    return (
        <Stack direction='row' sx={{ width: '100%' }}>
            <Stack justifyContent='center' sx={{ padding: '10px', width: '20%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold', color: statusColor() }}>{stockItem.name}</Typography>
                <Typography variant='caption'>name</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '20%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold', color: statusColor() }}>{stockItem.amount}</Typography>
                <Typography variant='caption'>stock level</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '20%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold', color: statusColor() }}>{Math.round(orderPoint(stockItem.demandRateForYear, stockItem.deliveryTime))}</Typography>
                <Typography variant='caption'>reorder level</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '20%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold', color: statusColor() }}>{amountToOrder(stockItem.demandRateForYear, stockItem.orderCost, stockItem.unitHoldingCost)}</Typography>
                <Typography variant='caption'>reorder quantity</Typography>
            </Stack>
            <Divider orientation='vertical' flexItem />
            <Stack justifyContent='center' sx={{ padding: '10px', width: '20%' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold', color: statusColor() }}>{stockItem.amount <= Math.round(orderPoint(stockItem.demandRateForYear, stockItem.deliveryTime)) ? 'reorder' : 'OK'}</Typography>
                <Typography variant='caption'>status</Typography>
            </Stack>
        </Stack>)
}

export default DashboardItem;