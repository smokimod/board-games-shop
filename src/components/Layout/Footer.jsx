import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "@mui/material/Link";

import React from "react";
// import "../../styles/mainPageStyles/Footer.css";

export const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 2 }}
        py={{ xs: 5, sm: 2 }}
        sx={{ bgcolor: "#FFD646" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} component="h3">
                Contacts
              </Box>
              <Box>
                <span>Street: Shmidta 23-38</span>
              </Box>
              <Box>
                <span>Belarus Mogilev</span>
              </Box>
              <Box>
                <span>Phone Number: 48-17-23</span>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} component="h3">
                Menu
              </Box>
              <Box>
                <span>Tiny myths</span>
              </Box>
              <Box>
                <span>About Shop</span>
              </Box>
              <Box>
                <span>Events</span>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} component="h3">
                Partnerts
              </Box>
              <Box>
                <Link href="/" underline="hover">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" underline="hover">
                  Roll and Dice
                </Link>
              </Box>
              <Box>
                <Link href="/" underline="hover">
                  Gaga Games Shop
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Board Games WorkShop &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
{
  /* <div className="footer-container">
        <div className="footer-content">
          <div className="contact">
            <h2>Contact</h2>
            <span>Street: Shmidta 23-38</span>
            <span>Belarus Mogilev</span>
            <span>Index: 212027</span>
            <span>Phone Number: 48-17-23</span>
            <span>Mobile Number: +375(33)929-29-53</span>
          </div>
          <div className="footer-menu">
            <h2>Menu</h2>
            <nav>
              <a href="#top">To the Top</a>
            </nav>
            <a href="#top">To the News</a>
            <a href="#top">About Shop</a>
            <a href="#top">Events</a>
          </div>
          <div className="our-partners">
            <h2>Our Partnerts</h2>
            <a href="#top">Tiny myths</a>
            <a href="#top">Superior Ogre</a>
            <a href="#top">Gaga Game Shop</a>
          </div>
          <div className="footer-email">
            <h2>Contact Us</h2>
            <div className="ui action input">
              <input type="text" placeholder="e-mail" />
              <button className="ui button">Sign In</button>
            </div>
          </div>
        </div>
        <div className="footer-origin">Created 30.11.2021</div>
      </div> */
}
