import { Card, Typography, Stack, Table, TableContainer, TableHead, TableCell, TableRow, TableBody, useTheme, Button, CardActions, CardContent, CardMedia } from "@mui/material";

export const items = [
    {
        name: 'mouse',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F612kkNU344L._AC_SL1500_.jpg&imgrefurl=https%3A%2F%2Fwww.zipy.co.il%2Fp%2Famazon%2Fleadsail-rechargeable-wireless-computer-mouse-2-4g-portable-slim-cordless-mouse-less-noise-for-laptop-optical-mouse-with-5-adjustable-dpi-levels-usb-mouse-for-laptop-deskbtop-macbook%2FB078J96YL2&tbnid=gGdhkNSAmnWuAM&vet=12ahUKEwj2oc3hq4r8AhUemicCHY3ZA2sQMygAegUIARCPAg..i&docid=XtrxDFThpd1f6M&w=1368&h=901&q=computer%20mouse&ved=2ahUKEwj2oc3hq4r8AhUemicCHY3ZA2sQMygAegUIARCPAg',
        amount: 300
    },
    {
        name: 'mouse',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F612kkNU344L._AC_SL1500_.jpg&imgrefurl=https%3A%2F%2Fwww.zipy.co.il%2Fp%2Famazon%2Fleadsail-rechargeable-wireless-computer-mouse-2-4g-portable-slim-cordless-mouse-less-noise-for-laptop-optical-mouse-with-5-adjustable-dpi-levels-usb-mouse-for-laptop-deskbtop-macbook%2FB078J96YL2&tbnid=gGdhkNSAmnWuAM&vet=12ahUKEwj2oc3hq4r8AhUemicCHY3ZA2sQMygAegUIARCPAg..i&docid=XtrxDFThpd1f6M&w=1368&h=901&q=computer%20mouse&ved=2ahUKEwj2oc3hq4r8AhUemicCHY3ZA2sQMygAegUIARCPAg',
        amount: 300
    },
    {
        name: 'mouse',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F612kkNU344L._AC_SL1500_.jpg&imgrefurl=https%3A%2F%2Fwww.zipy.co.il%2Fp%2Famazon%2Fleadsail-rechargeable-wireless-computer-mouse-2-4g-portable-slim-cordless-mouse-less-noise-for-laptop-optical-mouse-with-5-adjustable-dpi-levels-usb-mouse-for-laptop-deskbtop-macbook%2FB078J96YL2&tbnid=gGdhkNSAmnWuAM&vet=12ahUKEwj2oc3hq4r8AhUemicCHY3ZA2sQMygAegUIARCPAg..i&docid=XtrxDFThpd1f6M&w=1368&h=901&q=computer%20mouse&ved=2ahUKEwj2oc3hq4r8AhUemicCHY3ZA2sQMygAegUIARCPAg',
        amount: 300
    },
];

const Inventory = () => { 
    const theme = useTheme();

    return (
      <>{
        items.map((x, index) => 
        <Card key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={x.image}
              title="green iguana"
            />
            <CardContent>
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
          </Card>)
          }</>)
}

export default Inventory;