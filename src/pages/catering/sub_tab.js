import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import "./lunchbox.css";
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/material/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import ourMenu from "../../assets/Crispy.png";
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

export default function SubTab() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
      <TabList
        
        disableUnderline
        sx={{
          p: 0.5,
          gap: 0.5,
          borderRadius: 'xl',
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: 'sm',
            bgcolor: '#009E60',
            color: '#fff',
            fontWeight: '600',
          },
          
        }}
      >
        <Tab disableIndicator sx={{border:'1px solid #009E60',color:'#009E60'}}>NOODLES</Tab>
        <Tab disableIndicator sx={{border:'1px solid #009E60',color:'#009E60'}}>FIRED RICE</Tab>
        <Tab disableIndicator sx={{border:'1px solid #009E60',color:'#009E60'}}>NOODLES</Tab>
        <Tab disableIndicator sx={{border:'1px solid #009E60',color:'#009E60'}}>FIRED RICE</Tab>
      </TabList>
      <TabPanel value={0}>
      <Card sx={{ width: 360 }} className="card-sub-menu">
      <CardMedia
        className="sub-menu"
        component="img"
        image={ourMenu}
        alt="lunchbox"
      />
     <CardContent className='card-content'>
       <div>
         <Typography fontSize="lg" fontWeight="700">
          Crispy Chicken (L)
         </Typography>
         <Typography className="menu-desc" level="body-xs" fontWeight="700">Most Popular. Lightly battered pieces of chicken stir fried with vegetables in our zesty sweet chilli sauce.</Typography>
       </div>
       <CardActions sx={{flexDirection: 'row', justifyContent: 'space-between'}}>
       <Typography className="m-desc" fontSize="sm" fontWeight="700">
          &#8364; 8.89
         </Typography>
         <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
        <Button className='view-btn' size="small"  startIcon={<CircleNotificationsOutlinedIcon />}>View Allergens</Button>
      </CardActions>
       <Button
         variant="solid"
         size="lg"
         sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, width: '100%' }}
         className='full-btn'
       >
        <a href="/menu-detail" style={{textDecoration: 'none', color: '#fff'}}>
         ORDER NOW
         </a>
       </Button>
     </CardContent>
   </Card>
      </TabPanel>
      <TabPanel value={1}>
      <Card sx={{ width: 360 }} className="card-sub-menu">
      <CardMedia
        className="sub-menu"
        component="img"
        image={ourMenu}
        alt="lunchbox"
      />
     <CardContent className='card-content'>
       <div>
         <Typography fontSize="lg" fontWeight="700">
          Crispy Chicken (L)
         </Typography>
         <Typography className="menu-desc" level="body-xs" fontWeight="700">Most Popular. Lightly battered pieces of chicken stir fried with vegetables in our zesty sweet chilli sauce.</Typography>
       </div>
       <CardActions sx={{flexDirection: 'row', justifyContent: 'space-between'}}>
       <Typography className="m-desc" fontSize="sm" fontWeight="700">
          &#8364; 8.89
         </Typography>
         <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
        <Button className='view-btn' size="small" startIcon={<CircleNotificationsOutlinedIcon />}>View Allergens</Button>
      </CardActions>
       <Button
         variant="solid"
         size="lg"
         sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, width: '100%' }}
         className='full-btn'
       >
        <a href="/menu-detail" style={{textDecoration: 'none', color: '#fff'}}>
         ORDER NOW
         </a>
       </Button>
     </CardContent>
   </Card>
      </TabPanel>
      <TabPanel value={2}>
      <Card sx={{ width: 360 }} className="card-sub-menu">
      <CardMedia
        className="sub-menu"
        component="img"
        image={ourMenu}
        alt="lunchbox"
      />
     <CardContent className='card-content'>
       <div>
         <Typography fontSize="lg" fontWeight="700">
          Crispy Chicken (L)
         </Typography>
         <Typography className="menu-desc" level="body-xs" fontWeight="700">Most Popular. Lightly battered pieces of chicken stir fried with vegetables in our zesty sweet chilli sauce.</Typography>
       </div>
       <CardActions sx={{flexDirection: 'row', justifyContent: 'space-between'}}>
       <Typography className="m-desc" fontSize="sm" fontWeight="700">
          &#8364; 8.89
         </Typography>
         <Popper open={open} anchorEl={anchorEl} placement={placement}  transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
        <Button className='view-btn' size="small" startIcon={<CircleNotificationsOutlinedIcon />}>View Allergens</Button>
      </CardActions>
       <Button
         variant="solid"
         size="lg"
         sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, width: '100%' }}
         className='full-btn'
       >
        <a href="/menu-detail" style={{textDecoration: 'none', color: '#fff'}}>
         ORDER NOW
         </a>
       </Button>
     </CardContent>
   </Card>
      </TabPanel>
    </Tabs>
    
  );
}
