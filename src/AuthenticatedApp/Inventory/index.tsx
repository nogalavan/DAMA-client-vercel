import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Card, Typography, useTheme, Button, CardActions, CardContent, CardMedia, Box, Grid, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { StockItem } from "../../types/StockItem";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import QRDialog from "./QRDialog";
import AddAmountDialog from "./AddAmountDialog";
// import Noga from '../../../public/'

export const itemsImages = [
  {
    id: 'item-Mouse',
    imageSource: require('../../assets/mouse.png'),
  },
  {
    id: 'item-Key_baord',
    imageSource: require('../../assets/keyboard.png'),
  },
  {
    id: 'item-Charger',
    imageSource: require('../../assets/macCharger.png'),
  },
  {
    id: 'item-Eathernet',
    imageSource: require('../../assets/eathernetCable.png'),
  },
  {
    id: 'item-Computer_screen',
    imageSource: require('../../assets/computer-screen.jpeg'),
  },
  {
    id: 'item-Hard_disk',
    imageSource: require('../../assets/hard-disk.jpeg'),
  }
]

const Inventory = () => { 
    const theme = useTheme();
    const [selectedItem, setSelectedItem]= useState<StockItem>();
    const [QRopen, setQRopen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [items, setItems] = useState<StockItem[]>();

    useEffect(() => {
      // GET request using axios inside useEffect React hook
      axios.get('https://dama-server-vercel.vercel.app/api/stockItem/getAll')
          .then(response => {setItems(response.data)
          });
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const handleOpenQR = (stockItem: StockItem) => {
    setSelectedItem(stockItem);
    setQRopen(true);
  }

  const handleEditOpen= (stockItem: StockItem) => {
    setSelectedItem(stockItem);
    setEditOpen(true);
  }

  const handleEditAmountClose = (amount: number) => {
    console.log(amount);
    setEditOpen(false);
  }

    return (
      // <Stack>
      //   <Stack>
      //     <Card sx={{height: 180, width: 180}}>
      //       <Stack>

      //       </Stack>
      //     </Card>
      //   </Stack>
      // </Stack>
      <>
      <Grid container height='100%' alignItems='center' justifyContent='center' spacing={{ xs: 2, md: 2 }} sx={{paddingTop: '10px'}}>
        {items && items.map((x, index) =>  (
          <Grid item xs={4} sm={4} md={4} key={index} sx={{display: 'flex', justifyContent: 'center'}}>
             <Card key={index} sx={{height: 180, width: 240}}>
              <Stack alignItems='center' justifyContent='space-evenly' height='100%'>
                <Box
                  component="img"
                  sx={{
                    height: 100,
                    width: 180,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  src={itemsImages.find(image => image.id === x.myId)?.imageSource}
                />
                <Stack direction='row'>
                  <TextField
                    sx={{width: '100px'}}
                    label="Amount"
                    id="outlined-size-small"
                    value={x.amount}
                    size="small"
                  />
                  <IconButton onClick={() => handleEditOpen(x)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleOpenQR(x)}>
                    <QrCode2Icon />
                  </IconButton>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedItem && <QRDialog open={QRopen} onClose={() => setQRopen(false)} itemKey={selectedItem.myId}></QRDialog>}
      {selectedItem && <AddAmountDialog open={editOpen} onClose={handleEditAmountClose}></AddAmountDialog>}
      </>
    )

    // return (
    //   <>{
    //     items.map((x, index) => 
    //     <Card key={index} sx={{ maxWidth: 345 }}>
    //         <CardMedia
    //           sx={{ height: 140 }}
    //           image={x.image}
    //           title="green iguana"
    //         />
    //         <CardContent>
    //           <Typography gutterBottom variant="h5" component="div">
    //             {x.name}
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //             {`כמות : ${x.amount}`}
    //           </Typography>
    //         </CardContent>
    //         <CardActions>
    //           <Button size="small">הוסף למלאי</Button>
    //         </CardActions>
    //       </Card>)
    //       }</>)
}

export default Inventory;