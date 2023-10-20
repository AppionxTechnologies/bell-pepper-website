import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SubTab from './sub_tab';
import { Container, Grid } from '@mui/material';
import "./lunchbox.css";
import Image3 from "../../assets/food-3.jpg";

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
      <CustomTabPanel value={value} index={0}>
        <Container style={{paddingLeft:"0%"}}>
            <h2 className='heading'>CATERING TRAYS</h2>
            <p className='content'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
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