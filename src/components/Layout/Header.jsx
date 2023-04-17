import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CasinoIcon from "@mui/icons-material/Casino";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { CartHeaderIcon } from "../MainPageResults/mainPage-children/CartHeaderIcon";
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  Badge,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { GoogleAuth } from "../googleAuth/GoogleAuth";

import "../../styles/Layout/Header.css";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} in={!trigger} direction={"down"}>
      {children}
    </Slide>
  );
}
export const Header = ({ handleMouseOver, isHovering }) => {
  const cart = useSelector((state) => state.cart.itemsCart);
  const sample = useSelector((state) => {
    return state.sample.value;
  });
  const history = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    history(`/searchResults/${sample}`);
  };

  const handleChange = (e) => {
    dispatch({ type: "INPUT_VALUE", payload: e.target.value });
  };

  return (
    <HideOnScroll>
      <AppBar position="sticky" color="default" sx={{ bgcolor: "#FFD646" }}>
        <Toolbar>
          <NavLink to="/" style={{ color: "black" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="logo"
              fontSize="inherit"
            >
              <CasinoIcon />
            </IconButton>
          </NavLink>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            display={{ xs: "none", sm: "block" }}
          >
            <NavLink to="/" style={{ color: "black" }}>
              <header className="four">
                <h2>Border Games Shop</h2>
              </header>
            </NavLink>
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ m: 1 }}>
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
            <NavLink
              style={{ color: "black" }}
              to="/myCart"
              onMouseOver={handleMouseOver}
            >
              <IconButton
                color="inherit"
                size="large"
                style={{ fontSize: "18px" }}
              >
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon size="large" />
                </Badge>
              </IconButton>
            </NavLink>
            <Box display={{ xs: "none", sm: "block" }}>
              {isHovering && <CartHeaderIcon />}
            </Box>
            <GoogleAuth />
          </Stack>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
    ///12312
  );
};
