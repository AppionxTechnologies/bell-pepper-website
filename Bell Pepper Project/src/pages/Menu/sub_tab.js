import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import "./lunchbox.css";
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import ourMenu from "../../assets/our-menu.png";
import IconButton from '@mui/joy/IconButton';


export default function SubTab() {
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
      <Card sx={{ width: 320 }}>
     
     <AspectRatio minHeight="120px" maxHeight="200px">
       <img
         src={ourMenu}
         srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
         loading="lazy"
         alt=""
       />
     </AspectRatio>
     <CardContent orientation="horizontal">
       <div>
         <Typography level="body-xs">Total price:</Typography>
         <Typography fontSize="lg" fontWeight="lg">
          Crispy
         </Typography>
       </div>
       <Button
         variant="solid"
         size="md"
         aria-label="Explore Bahamas Islands"
         sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
       >
         View
       </Button>
     </CardContent>
   </Card>
      </TabPanel>
      <TabPanel value={1}>
      <Card sx={{ width: 320 }}>
     
     <AspectRatio minHeight="120px" maxHeight="200px">
       <img
         src={ourMenu}
         srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
         loading="lazy"
         alt=""
       />
     </AspectRatio>
     <CardContent orientation="horizontal">
       <div>
         <Typography level="body-xs">Total price:</Typography>
         <Typography fontSize="lg" fontWeight="lg">
          Crispy Chicken1
         </Typography>
       </div>
       <Button
         variant="solid"
         size="md"
         aria-label="Explore Bahamas Islands"
         sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
       >
         View
       </Button>
     </CardContent>
   </Card>
      </TabPanel>
      <TabPanel value={2}>
      <Card sx={{ width: 320 }}>
     
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={ourMenu}
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
           Crispy Chicken2
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          View
        </Button>
      </CardContent>
    </Card>
      </TabPanel>
    </Tabs>
    
  );
}
