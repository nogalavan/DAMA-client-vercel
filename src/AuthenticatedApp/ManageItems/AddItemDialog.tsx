import { Stack, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface AddItemDialogProps {
    open: boolean;
    handleClose: () => void;
}

const AddItemDialog = ({open, handleClose}: AddItemDialogProps) => { 
    return (<Dialog open={open} onClose={handleClose}>
        <DialogTitle>הוספת מוצר</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField label="שם מוצר" fullWidth sx={{mt: '5px'}}/>
            <TextField label="תיאור" fullWidth/>
            <Stack direction='row' spacing={1}>
                <TextField label="עלות הזמנה" />
                <TextField label="קצב ביקוש לשנה" />
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField label="מחיר יחידה" />
                <TextField label="ריבית שנתית לפריט" />
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField label="עלות החזקה ליחידה"/>
                <TextField label="זמן אספקה (ימים)" />
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

export default AddItemDialog;