import { Button, Dialog, makeStyles, Stack, TextField, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import { useState } from "react";

export const StyledButton = styled(Button)`
  background-color: #15b9b7;
  color: white;
  width: 200px;
  &:hover {
    background-color: #15b9b7;
    color: white;
  }
`;

export interface SimpleDialogProps {
    open: boolean;
    onClose: (value: number) => void;
}

const AddAmountDialog = ({open, onClose} : SimpleDialogProps) => {
    const [amount, setAmount] = useState(0);

    const handleClose = () => {
        onClose(amount);
    };

    const save = () => {
        handleClose();
    }

    return (
    <Dialog onClose={handleClose} open={open} >
        <Stack sx={{width: '400px', height: '290px'}} alignItems='center' justifyContent='space-around'>
            <Typography variant="h6" gutterBottom>
            How much would you like to add?
        </Typography>
        <TextField type='number' value={amount} onChange={(e) => setAmount(Number(e.target.value))}></TextField>
        <StyledButton variant='contained' onClick={() => save()}>
                Add
            </StyledButton>
        </Stack>
    </Dialog>)
}

export default AddAmountDialog;