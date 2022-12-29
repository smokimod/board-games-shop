import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/mainPageStyles/Header.css";
import CasinoIcon from "@mui/icons-material/Casino";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { CartHeaderIcon } from "../MainPageResults/mainPage-children/CartHeaderIcon";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
  TextField,
  InputAdornment,
  Badge,
} from "@mui/material";
export const Header = () => {
  const history = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();
  const sample = useSelector((state) => {
    return state.sample.value;
  });
  const cart = useSelector((state) => state.cart.itemsCart);

  const onSubmit = (e) => {
    e.preventDefault();
    history(`/searchResults/${sample}`);
  };

  const handleChange = (e) => {
    dispatch({ type: "INPUT_VALUE", payload: e.target.value });
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <AppBar position="sticky" color="default" sx={{ bgcolor: "#FFD646" }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CasinoIcon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/">Border Games Shop</NavLink>
        </Typography>
        <Stack direction="row" alignItems="center" spacing={3} sx={{ m: 1 }}>
          <TextField
            component="form"
            size="large"
            onSubmit={onSubmit}
            fullWidth
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            value={sample}
            onChange={handleChange}
            id="search"
            name="search"
            label="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <NavLink to={`/searchResults/${sample}`} type="submit">
                    <IconButton edge="end" color="primary" onClick={onSubmit}>
                      <SearchIcon />
                    </IconButton>
                  </NavLink>
                </InputAdornment>
              ),
            }}
          ></TextField>
          <IconButton color="inherit" size="large" style={{ fontSize: "18px" }}>
            <NavLink
              style={{ color: "black" }}
              to="/myCart"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon size="large" />
                {isHovering && <CartHeaderIcon />}
              </Badge>
            </NavLink>
          </IconButton>
          <Button color="inherit" size="large" style={{ fontSize: "18px" }}>
            login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
