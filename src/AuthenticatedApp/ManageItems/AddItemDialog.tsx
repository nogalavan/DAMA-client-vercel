import { Stack, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface AddItemDialogProps {
    open: boolean;
    handleClose: () => void;
}

const AddItemDialog = ({open, handleClose}: AddItemDialogProps) => { 
    return (<Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add item</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
          <TextField label="name" fullWidth sx={{mt: '5px'}}/>
            <TextField label="Description" fullWidth/>
            <Stack direction='row' spacing={1}>
                <TextField label="Order cost" />
                <TextField label="Demand rate for year" />
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField label="Unit price" />
                <TextField label="Annual interest per item" />
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField label="Unit holding cost" />
                <TextField label="Delivery time (days)" />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
        <Button variant='contained' sx={{backgroundColor: '#15b9b7', color: 'white'}}>
        save
          </Button>
        </DialogActions>
      </Dialog>)
}

export default AddItemDialog;