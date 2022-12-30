import { Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { StockItem } from "../../types/StockItem";
import { CardContainer } from "../../components/CardContainer";
import AddItemDialog from "./AddItemDialog";
import DisplayItem from "./DisplayItem";
import EditItemDialog from "./EditItemDialog";
import { type } from "@testing-library/user-event/dist/type";
import { addStockItem, getAll } from "../../services/stockItemService";
import axios from "axios";

// export const items = [
//     {
//         id:"1",
//         myId: 'item-Mouse',
//         name: 'deveops',
//         description: 'עמר',
//         demandRateForYear: 30,
//         orderCost: 30,
//         unitPrice: 30,
//         annualInterestPerItem: 30,
//         unitHoldingCost: 30,
//         deliveryTime: 30,
//     },
//     {
//         id:"2",
//         myId: 'item-Mouse',
//         name: 'deveops',
//         description: 'נגהנגה',
//         demandRateForYear: 30,
//         orderCost: 30,
//         unitPrice: 30,
//         annualInterestPerItem: 30,
//         unitHoldingCost: 30,
//         deliveryTime: 30,
//     },
//     {
//         id:"3",
//         myId: 'item-Mouse',
//         name: 'deveops',
//         description: 'עמר',
//         demandRateForYear: 30,
//         orderCost: 30,
//         unitPrice: 30,
//         annualInterestPerItem: 30,
//         unitHoldingCost: 30,
//         deliveryTime: 30,
//     },
//     {
//         id:"4",
//         myId: 'item-Mouse',
//         name: 'deveops',
//         description: 'עמר',
//         demandRateForYear: 30,
//         orderCost: 30,
//         unitPrice: 30,
//         annualInterestPerItem: 30,
//         unitHoldingCost: 30,
//         deliveryTime: 30,
//     },
// ];

const ManageItems = () => { 
    const [openEdit, setOpenEdit] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [items, setItems] = useState<StockItem[]>();
    const [selectedItem, setSelectedItem] = useState<StockItem | undefined>();

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://dama-server-vercel.vercel.app/api/stockItem/getAll')
            .then(response => {setItems(response.data); console.log(response);
            });
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    // console.log(items);
    

    // const items = (getAll() as unknown as StockItem[]);
    // console.log(items);
    

    const selectItem = (item: StockItem) => {
        setSelectedItem(item);
        setOpenEdit(true);
    }

    const handleCloseEdit = () => {
        setOpenEdit(false);
        // addStockItem('item-Eathernet','eathernet', 10,'eathernet cable', 500,  6, 6,  0.2, 1.9);
        // addStockItem('item-Charger','charger', 10,'noga', 800,  5, 7,  0.2, 1.9);
        // addStockItem('item-Key_baord','key board', 12,'noga', 1200,  6, 9,  0.2, 2.3);
        // addStockItem('item-Mouse','mouse', 12,'noga', 2400,  7.5, 10.5,  0.2, 2.3)
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    return (
    <Stack direction='column' width='100%' sx={{padding: '20px 20px'}} spacing={2}>
        {/* <Button variant='contained' onClick={() => setOpenAdd(true)} sx={{backgroundColor: '#15b9b7', color: 'white', width: '200px'}}>
            הוספת מוצר חדש למחסן
        </Button> */}
        {items && items.map((item, index) => (
            <CardContainer key={index} sx={{ height: '70px', cursor: 'pointer' }} onClick={() => selectItem(item)}>
                <Stack direction='row' sx={{ height: '100%', width: '100%' }}>
                    <DisplayItem stockItem={item}/>
                </Stack>
            </CardContainer>
        ))}
        {selectedItem && <EditItemDialog open={openEdit} handleClose={handleCloseEdit} item={selectedItem!}></EditItemDialog>}
        <AddItemDialog open={openAdd} handleClose={handleCloseAdd}></AddItemDialog>
    </Stack>)
}

export default ManageItems;