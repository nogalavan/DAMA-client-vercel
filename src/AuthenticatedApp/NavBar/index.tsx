import {
    AppBar, Grid, Stack, Toolbar, Typography
  } from '@mui/material';
  import NavLink from './NavLink';
  import Greeting from './Greeting';
  import ColorModeButton from './ColorModeButton';
  // import logo from '../../assets/damaImage.png';
  
  interface NavBarProps {
    height: string;
  }
  
  const NavBar = ({ height }: NavBarProps) => (
    <AppBar position='relative' sx={{ height, minWidth: '620px'}}>
    <Toolbar>
      <Grid
        container
        flexWrap='nowrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Stack direction='row' flexWrap='nowrap' sx={{ width: 'auto' }}>
          <Stack direction='row'>
            {/* <img src={logo} alt='logo' height='40px' width='40px'></img> */}
            <Typography color='#15b9b7' variant='h5' marginRight='40px' sx={{fontWeight: '700', alignSelf: 'center'}}>
              DAMA
            </Typography>
          </Stack>
          <Stack direction='row' justifyContent='space-around' alignItems='center'
            flexWrap='nowrap'
            sx={{ width: 'auto', height: '100%' }}
          >
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/inventory'>Inventory</NavLink>
            <NavLink to='/purchases-history'>Transactions</NavLink>
            <NavLink to='/manage-items'>Items</NavLink>
          </Stack>
        </Stack>
        <Stack
          direction='row'
          sx={{ width: 'auto' }}
          alignItems='baseline'
          flexWrap='nowrap'
        >
          <Greeting/>
          <ColorModeButton />
        </Stack>
      </Grid>
    </Toolbar>
  </AppBar>
  );
  
  export default NavBar;