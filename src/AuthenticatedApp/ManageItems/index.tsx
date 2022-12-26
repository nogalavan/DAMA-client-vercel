import { Stack, Button } from "@mui/material";
import { useState } from "react";
import { StockItem } from "../../types/StockItem";
import { CardContainer } from "../../components/CardContainer";
import AddItemDialog from "./AddItemDialog";
import DisplayItem from "./DisplayItem";
import EditItemDialog from "./EditItemDialog";

export const items = [
    {
        name: 'deveops',
        description: 'עמר',
        demandRateForYear: 30,
        orderCost: 30,
        unitPrice: 30,
        annualInterestPerItem: 30,
        unitHoldingCost: 30,
        deliveryTime: 30,
    },
    {
        name: 'deveops',
        description: 'נגהנגה',
        demandRateForYear: 30,
        orderCost: 30,
        unitPrice: 30,
        annualInterestPerItem: 30,
        unitHoldingCost: 30,
        deliveryTime: 30,
    },
    {
        name: 'deveops',
        description: 'עמר',
        demandRateForYear: 30,
        orderCost: 30,
        unitPrice: 30,
        annualInterestPerItem: 30,
        unitHoldingCost: 30,
        deliveryTime: 30,
    },
    {
        name: 'deveops',
        description: 'עמר',
        demandRateForYear: 30,
        orderCost: 30,
        unitPrice: 30,
        annualInterestPerItem: 30,
        unitHoldingCost: 30,
        deliveryTime: 30,
    },
];

const ManageItems = () => { 
    const [openEdit, setOpenEdit] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [selectedItem, setSelectedItem] = useState<StockItem>(items[0]);

    const selectItem = (item: StockItem) => {
        setSelectedItem(item);
        setOpenEdit(true);
    }

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    return (
    <Stack direction='column' width='100%' sx={{padding: '20px 20px'}} spacing={2}>
        {/* <Button variant='contained' onClick={() => setOpenAdd(true)} sx={{backgroundColor: '#15b9b7', color: 'white', width: '200px'}}>
            הוספת מוצר חדש למחסן
        </Button> */}
        {items.map((item, index) => (
            <CardContainer key={index} sx={{ height: '70px', cursor: 'pointer', direction: 'rtl' }} onClick={() => selectItem(item)}>
                <Stack direction='row' sx={{ height: '100%', width: '100%' }}>
                    <DisplayItem stockItem={item}/>
                </Stack>
            </CardContainer>
        ))}
        <EditItemDialog open={openEdit} handleClose={handleCloseEdit} item={selectedItem}></EditItemDialog>
        <AddItemDialog open={openAdd} handleClose={handleCloseAdd}></AddItemDialog>
    </Stack>)
}

export default ManageItems;