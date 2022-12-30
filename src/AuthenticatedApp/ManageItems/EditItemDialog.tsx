import { Stack, Typography, Divider, Chip, Avatar, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { StockItem } from "../../types/StockItem";

interface EditItemDialogProps {
    open: boolean;
    handleClose: () => void;
    item: StockItem;
}

const EditItemDialog = ({open, handleClose, item}: EditItemDialogProps) => { 
    return (<Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit {item.name}</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField label="name" value={item.name} fullWidth sx={{mt: '5px'}}/>
            <TextField label="Description" value={item.description} fullWidth/>
            <Stack direction='row' spacing={1}>
                <TextField label="Order cost" value={item.orderCost}/>
                <TextField label="Demand rate for year" value={item.demandRateForYear}/>
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField label="Unit price" value={item.unitPrice}/>
                <TextField label="Annual interest per item" value={item.annualInterestPerItem}/>
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField label="Unit holding cost" value={item.unitHoldingCost}/>
                <TextField label="Delivery time (days)" value={item.deliveryTime}/>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
        <Button variant='contained' sx={{backgroundColor: '#15b9b7', color: 'white'}}>
        Save
          </Button>
        </DialogActions>
      </Dialog>)
}

export default EditItemDialog;