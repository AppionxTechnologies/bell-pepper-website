import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ourMenu from "../../assets/Crispy.png";
import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Avatar from "@mui/material/Avatar";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }

  let [count1, setCount1] = useState(0);

  function incrementCount1() {
    count1 = count1 + 1;
    setCount(count1);
  }
  function decrementCount1() {
    count1 = count1 - 1;
    setCount(count1);
  }

  let [count2, setCount2] = useState(0);

  function incrementCount2() {
    count2 = count2 + 1;
    setCount(count2);
  }
  function decrementCount2() {
    count2 = count2 - 1;
    setCount(count2);
  }

  let [count3, setCount3] = useState(0);

  function incrementCount3() {
    count3 = count3 + 1;
    setCount(count3);
  }
  function decrementCount3() {
    count3 = count3 - 1;
    setCount3(count3);
  }

  let [count4, setCount4] = useState(0);

  function incrementCount4() {
    count4 = count4 + 1;
    setCount4(count4);
  }
  function decrementCount4() {
    count4 = count4 - 1;
    setCount4(count4);
  }

  let [count5, setCount5] = useState(0);

  function incrementCount5() {
    count5 = count5 + 1;
    setCount5(count5);
  }
  function decrementCount5() {
    count5 = count5 - 1;
    setCount5(count5);
  }
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#dddada" }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sx={{ padding: "10px" }}>
          <Item className="main-grid">
            <Typography fontSize="lg" fontWeight="700">
              Chilli & Cashew (L)
            </Typography>
            <Typography className="menu-desc" level="body-xs" fontWeight="700">
              Most Popular. Lightly battered pieces of chicken stir fried with
              vegetables in our zesty sweet chilli sauce.
            </Typography>
            <Button
              className="view-btn"
              size="small"
              startIcon={<CircleNotificationsOutlinedIcon />}
            >
              View Allergens
            </Button>
            <FormControl>
              <Grid container>
                <Grid xs={8} sm={8} md={8}>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    className="addons-heading"
                  >
                    CHOOSE A PROTEIN
                  </FormLabel>
                </Grid>
                <Grid xs={4} sm={4} md={4}>
                  <Button className="choose-btn" size="small">
                    Choose 1
                  </Button>
                </Grid>
              </Grid>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <Grid container>
                  <Grid
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <img alt="Remy Sharp" src={ourMenu} className="image1" />
                    <b className="choose-font">Tafu</b>{" "}
                    <span className="sub-name">(Free)</span>
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <FormControlLabel
                      value="Tafu"
                      control={<Radio />}
                      labelPlacement="start"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <img alt="Remy Sharp" src={ourMenu} className="image1" />
                    <b className="choose-font">Chicken</b>{" "}
                    <span className="sub-name">(Free)</span>
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <FormControlLabel
                      value="Chicken"
                      control={<Radio />}
                      labelPlacement="start"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <img alt="Remy Sharp" src={ourMenu} className="image1" />
                    <b className="choose-font">Duck</b>{" "}
                    <span className="sub-name">(Free)</span>
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <FormControlLabel
                      value="Duck"
                      control={<Radio />}
                      labelPlacement="start"
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>

            <FormControl>
              <Grid container>
                <Grid xs={8} sm={8} md={8}>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    className="addons-heading"
                  >
                    ADD SOME EXTRA WITH MEAL
                  </FormLabel>
                </Grid>
                <Grid xs={4} sm={4} md={4}>
                  <Button className="choose-btn" size="small">
                    Choose up 2
                  </Button>
                </Grid>
              </Grid>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <Grid container>
                  <Grid
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <img alt="Remy Sharp" src={ourMenu} className="image1" />
                    <b className="choose-font">Prawns</b>
                    <span className="sub-name">(+&#8364;4.5)</span>
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <ButtonGroup className="btn-grp">
                    <div onClick={decrementCount}><DeleteOutlineIcon/>&nbsp;&nbsp;</div>
                    <div>{count}&nbsp;&nbsp;</div>
                    <div onClick={incrementCount}><AddIcon/></div>
                    </ButtonGroup>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <img alt="Remy Sharp" src={ourMenu} className="image1" />
                    <b className="choose-font">Chicken</b>
                    <span className="sub-name">(+&#8364;4.5)</span>
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <ButtonGroup className="btn-grp">
                    <div onClick={decrementCount1}><DeleteOutlineIcon/>&nbsp;&nbsp;</div>
                    <div>{count}&nbsp;&nbsp;</div>
                    <div onClick={incrementCount1}><AddIcon/></div>
                    </ButtonGroup>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <img alt="Remy Sharp" src={ourMenu} className="image1" />
                    <b className="choose-font">Tofu</b>
                    <span className="sub-name">(Free)</span>
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <ButtonGroup className="btn-grp">
                    <div onClick={decrementCount2}><DeleteOutlineIcon/>&nbsp;&nbsp;</div>
                    <div>{count2}&nbsp;&nbsp;</div>
                    <div onClick={incrementCount2}><AddIcon/></div>
                    </ButtonGroup>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <img alt="Remy Sharp" src={ourMenu} className="image1" />
                    <b className="choose-font">Chicken</b>
                    <span className="sub-name">(+&#8364;4.5)</span>
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <ButtonGroup className="btn-grp">
                    <div onClick={decrementCount3}><DeleteOutlineIcon/>&nbsp;&nbsp;</div>
                    <div>{count3}&nbsp;&nbsp;</div>
                    <div onClick={incrementCount3}><AddIcon/></div>
                    </ButtonGroup>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <img alt="Remy Sharp" src={ourMenu} className="image1" />
                    <b className="choose-font">Chicken</b>
                    <span className="sub-name">(+&#8364;4.5)</span>
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <ButtonGroup className="btn-grp">
                    <div onClick={decrementCount4}><DeleteOutlineIcon/>&nbsp;&nbsp;</div>
                    <div>{count4}&nbsp;&nbsp;</div>
                    <div onClick={incrementCount4}><AddIcon/></div>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>

            <FormControl>
              <Grid container>
                <Grid xs={8} sm={8} md={8}>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    className="addons-heading"
                  >
                    CHOOSE A SIDE
                  </FormLabel>
                </Grid>
                <Grid xs={4} sm={4} md={4}>
                  <Button className="choose-btn" size="small">
                    Choose 1
                  </Button>
                </Grid>
              </Grid>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <Grid container>
                  <Grid
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <img alt="Remy Sharp" src={ourMenu} className="image1" />
                    Tafu
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <FormControlLabel
                      value="Tafu"
                      control={<Radio />}
                      labelPlacement="start"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <img alt="Remy Sharp" src={ourMenu} className="image1" />
                    Chicken
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <FormControlLabel
                      value="Chicken"
                      control={<Radio />}
                      labelPlacement="start"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    xs={8}
                    sm={8}
                    md={8}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <img alt="Remy Sharp" src={ourMenu} className="image1" />
                    Duck
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{ marginTop: "20px", marginLeft: "0px" }}
                  >
                    <FormControlLabel
                      value="Duck"
                      control={<Radio />}
                      labelPlacement="start"
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField multiline 
          rows={2}  id="outlined-multiline-static" label="Cooking instructions" placeholder="Please note, modification your order : spicy, no onion, more cheese, etc.." variant="outlined" />
    </Box>

    <ButtonGroup className="btn-grp-add">
                    <div onClick={decrementCount5}><RemoveCircleOutlineOutlinedIcon sx={{fontSize:"60px"}}/>&nbsp;&nbsp;</div>
                    <div>{count5}&nbsp;&nbsp;</div>
                    <div onClick={incrementCount5}><AddCircleOutlineOutlinedIcon sx={{fontSize:"60px"}} /></div>
                    </ButtonGroup>
                    
            <hr/>
            <Grid container>
                  <Grid
                    xs={6}
                    sm={6}
                    md={6}
                    sx={{ marginTop: "20px", marginLeft: "0px", color:"#009E60" }}
                  >
                    <b>&#8364;17.89</b>
                  </Grid>
                  <Grid
                    xs={6}
                    sm={6}
                    md={6}
                    sx={{ marginTop: "10px", marginLeft: "0px" }}
                  >
                     <Button
         variant="solid"
         size="lg"
         sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, width: '100%' }}
         className='full-btn'
       >
       
         ADD TO CART
       </Button>
                  </Grid>
                </Grid>

          </Item>
        </Grid>
        <Grid item xs={8} className="detail-img">
          <Item sx={{ padding: "0px" }}>
            <img
              className="detail-img"
              width={900}
              src={ourMenu}
              alt="title"
              loading="lazy"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
