import { Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { StockItem } from "../../types/StockItem";
import { CardContainer } from "../../components/CardContainer";
import axios from "axios";
import DashboardItem from "./DashboardItem";

const Dashboard = () => { 
    const [items, setItems] = useState<StockItem[]>();

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        // axios.get('https://dama-server-vercel.vercel.app/api/stockItem/getAll')
        //     .then(response => {setItems(response.data); console.log(response);
        //     });

            axios.get('http://localhost:5000/api/stockItem/getAll')
            .then(response => {setItems(response.data)
            });
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
    <Stack direction='column' width='100%' sx={{padding: '20px 20px'}} spacing={2}>
        {items && items.map((item, index) => (
            <CardContainer key={index} sx={{ height: '70px', cursor: 'pointer' }}>
                <Stack direction='row' sx={{ height: '100%', width: '100%' }}>
                    <DashboardItem stockItem={item}/>
                </Stack>
            </CardContainer>
        ))}
    </Stack>)
}

export default Dashboard;