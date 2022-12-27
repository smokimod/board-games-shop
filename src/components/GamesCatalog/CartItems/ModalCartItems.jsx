import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { cartClear } from "../../../Redux/reducers/cartReducers";

export const ModalCartItems = ({ modal, setModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.name && data.address && data.number && data.email) {
      dispatch(cartClear([]));
      setModal();
    } else {
      return null;
    }
  };

  return (
    <Dialog open={modal} onClose={setModal} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Please enter your data</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To perform a purchase it necessary to fill the form.
        </DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            required
            autoFocus
            fullWidth
            name="name"
            margin="dense"
            id="Name"
            label="Name"
            type="text"
            variant="standard"
            {...register("name", { required: "Enter your name" })}
            error={!!errors?.name}
            helperText={errors?.name ? errors.name.message : null}
          />
          <TextField
            required
            fullWidth
            name="email"
            margin="dense"
            id="Email"
            label="Email"
            type="email"
            variant="standard"
            {...register("email", { required: "Enter your email" })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
          />
          <TextField
            required
            fullWidth
            name="address"
            margin="dense"
            id="Address"
            label="Address"
            type="text"
            variant="standard"
            {...register("address", { required: "Enter your adress" })}
            error={!!errors?.adress}
            helperText={errors?.adress ? errors.adress.message : null}
          />
          <TextField
            required
            fullWidth
            name="number"
            margin="dense"
            id="Phone Number"
            label="Phone Number"
            type="number"
            variant="standard"
            {...register("number", { required: "Enter your phone number" })}
            error={!!errors?.number}
            helperText={errors?.number ? errors.number.message : null}
          />
          <DialogActions>
            <Button variant="contained" onClick={setModal} color="error">
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={onSubmit}
              type="submit"
              color="success"
            >
              Buy
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
