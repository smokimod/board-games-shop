import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ModalCartItem.css";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 6,
  px: 4,
  pb: 3,
};

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: theme.spacing(4),
  color: "black",
}));

const ChildModal = ({ closeModal }) => {
  const cart = useSelector((state) => state.cart.itemsCart);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    cart.length = 0;
  };

  return (
    <React.Fragment>
      <Modal
        hideBackdrop
        open={open}
        onClose={closeModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 700, height: 250 }}>
          <h2 id="child-modal-title">Thanks a lot!</h2>
          <Alert severity="success">
            The purchase was successfully completed
          </Alert>
          <Button onClick={closeModal} size="large">
            Go Back
          </Button>
        </Box>
      </Modal>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Button onClick={handleOpen} variant="contained" size="large">
          Yes
        </Button>
        <Button onClick={closeModal} variant="contained" size="large">
          No
        </Button>
      </Stack>
    </React.Fragment>
  );
};

export const ModalCartItems = ({ open, setOpen }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={setOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600, height: 200 }}>
          <ChildModal closeModal={setOpen} />
        </Box>
      </Modal>
    </div>
  );
};
