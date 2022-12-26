import { Card, Typography, useTheme, Button, CardActions, CardContent, CardMedia, Box, Grid } from "@mui/material";
// import Noga from '../../../public/'

export const items = [
  {
    id: 'item-Mouse',
    name: 'עכבר',
    imageSource: require('../../assets/mouse.png'),
    amount: 30
  },
  {
    id: 'item-Key_baord',
    name: 'מקלדת',
    imageSource: require('../../assets/keyboard.png'),
    amount: 30
  },
  {
    id: 'item-Charger',
    name: 'מטען',
    imageSource: require('../../assets/macCharger.png'),
    amount: 30
  },
  {
    id: 'item-Eathernet',
    name: 'כבל רשת',
    imageSource: require('../../assets/eathernetCable.png'),
    amount: 30
  }
]

const Inventory = () => { 
    const theme = useTheme();

    return (
      <Grid container height='100%' alignItems='center' justifyContent='center' spacing={{ xs: 2, md: 2 }} sx={{paddingTop: '10px'}}>
        {items.map((x, index) =>  (
          <Grid item xs={5} sm={5} md={5} key={index}>
             <Card key={index} sx={{height: 180, display: 'flex'}}>
              <CardMedia
                  component="img"
                  sx={{ width: 200 }}
                  image={x.imageSource}
                  alt="Live from space album cover"
                />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {x.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`כמות : ${x.amount}`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">הוסף למלאי</Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
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