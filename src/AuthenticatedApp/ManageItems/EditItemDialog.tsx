import { Stack, Typography, Divider, Chip, Avatar, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { StockItem } from "../../types/StockItem";

interface EditItemDialogProps {
    open: boolean;
    handleClose: () => void;
    item: StockItem;
}

const EditItemDialog = ({open, handleClose, item}: EditItemDialogProps) => { 
    return (<Dialog open={open} onClose={handleClose}>
        <DialogTitle>עריכת מוצר</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField label="שם מוצר" value={item.name} fullWidth sx={{mt: '5px'}}/>
            <TextField label="תיאור" value={item.description} fullWidth/>
            <Stack direction='row' spacing={1}>
                <TextField label="עלות הזמנה" value={item.orderCost}/>
                <TextField label="קצב ביקוש לשנה" value={item.demandRateForYear}/>
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField label="מחיר יחידה" value={item.unitPrice}/>
                <TextField label="ריבית שנתית לפריט" value={item.annualInterestPerItem}/>
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField label="עלות החזקה ליחידה" value={item.unitHoldingCost}/>
                <TextField label="זמן אספקה (ימים)" value={item.deliveryTime}/>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
        <Button variant='contained' sx={{backgroundColor: '#15b9b7', color: 'white'}}>
        שמירה
          </Button>
        </DialogActions>
      </Dialog>)
}

export default EditItemDialog;