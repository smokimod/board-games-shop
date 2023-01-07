import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { IconButton } from "@mui/material";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 3 }}
        py={{ xs: 2, sm: 5 }}
        sx={{ bgcolor: "#FFD646" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 1, sm: 5 }} pb={2}>
            <Grid
              item
              xs={12}
              lg={3}
              sm={3}
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
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
            <Grid
              item
              xs={12}
              lg={3}
              sm={3}
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              <Box borderBottom={1} component="h3">
                Help
              </Box>
              <Box>
                <span>FAQ</span>
              </Box>
              <Box>
                <span>Service</span>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={3}
              sm={3}
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              <Box borderBottom={1} component="h3">
                Menu
              </Box>
              <Box>
                <Link href="/" underline="hover" color="inherit">
                  About Shop
                </Link>
              </Box>
              <Box>
                <Link href="/" underline="hover" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" underline="hover" color="inherit">
                  Events
                </Link>
              </Box>
              <Box>
                <Link href="/" underline="hover" color="inherit">
                  Map
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={3}
              sm={3}
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              <Box borderBottom={1} component="h3">
                Partners
              </Box>
              <Box>
                <Link href="/" underline="hover" color="inherit">
                  Lavka Games
                </Link>
              </Box>
              <Box>
                <Link href="/" underline="hover" color="inherit">
                  Roll and Dice
                </Link>
              </Box>
              <Box>
                <Link href="/" underline="hover" color="inherit">
                  Gaga Games Shop
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            sx={{ fontWeight: "bold" }}
            pt={{ xs: 8, sm: 9 }}
            pb={{ xs: 2, sm: 0 }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sm={0.3} px={{ sm: 2 }}>
                <IconButton>
                  <FacebookIcon color="primary" />
                </IconButton>
              </Grid>
              <Grid item sm={0.3} px={{ sm: 2 }}>
                <IconButton>
                  <TwitterIcon color="primary" />
                </IconButton>
              </Grid>
              <Grid item sm={0.3} px={{ sm: 2 }}>
                <IconButton>
                  <GoogleIcon color="primary" />
                </IconButton>
              </Grid>
            </Grid>
            @Board Games WorkShop. All rights reserved &reg;{" "}
            {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
