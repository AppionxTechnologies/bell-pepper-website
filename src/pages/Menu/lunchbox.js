import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SubTab from './sub_tab';
import { Container, Grid } from '@mui/material';
import "./lunchbox.css";
import Image3 from "../../assets/food-2.jpg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
    <Box sx={{ width: '100%', }}>
       <div sx={{ width: '100%', }}>
       <img  src={Image3} alt="Image 3" className="img-banner" />
    </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{minWidth:"25%"}} TabIndicatorProps={{style: {backgroundColor:'#009E60'}}} label="LUNCH BOX" {...a11yProps(0)} />
          <Tab label="TAKEOUT" style={{minWidth:"25%"}} {...a11yProps(1)} />
          <Tab label="MEALDEALS" style={{minWidth:"25%"}} {...a11yProps(2)} />
          <Tab label="SPECTAIL & VALUE MEALS" style={{minWidth:"25%"}} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Container style={{paddingLeft:"0%"}}>
            <h2 className='heading'>LUNCH BOX</h2>
            <span className='timing'>Time: 12p.m - 4p.m </span>
            <p className='content'>For takeaway, Pickup or Dine in only</p>
        <SubTab />
        </Container>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Container style={{paddingLeft:"0%"}}>
            <h2 className='heading'>TAKEOUT</h2>
            <span className='timing'>Time: 12p.m - 4p.m </span>
            <p className='content'>For takeaway, Pickup or Dine in only</p>
        <SubTab />
        </Container>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Container style={{paddingLeft:"0%"}}>
            <h2 className='heading'>MEAL DEALS</h2>
            <span className='timing'>Time: 12p.m - 4p.m </span>
            <p className='content'>For takeaway, Pickup or Dine in only</p>
        <SubTab />
        </Container>
      </CustomTabPanel>
    </Box>
  );
}