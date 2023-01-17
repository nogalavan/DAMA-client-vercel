import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Shell = () => (
    <Grid container height='100vh'>
        <NavBar height='65px' />
        <Grid item container sx={{ height: 'calc(100% - 65px)', overflow: 'auto' }}>
        <Outlet />
        </Grid>
    </Grid>
);

export default Shell;