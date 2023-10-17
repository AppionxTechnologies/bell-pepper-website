import * as React from "react";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#dddada" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
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
              <FormLabel
                id="demo-radio-buttons-group-label"
                className="addons-heading"
              >
                CHOOSE A PROTEIN
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <Grid
                  container
                  spacing={{ xs: 3, md: 6 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid xs={4} sm={4} md={4}>
                    <Avatar alt="Remy Sharp" src={ourMenu} />
                  </Grid>
                  <Grid xs={4} sm={4} md={4}>
                    <FormControlLabel
                      value="female"
                      sx={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                      control={<Radio />}
                      label="Tafu"
                    />
                  </Grid>
                </Grid>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Chicken"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Duck"
                />
              </RadioGroup>
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={8}>
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
