import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { signIn } from "../../store/actions/authActions";
import { Navigate } from "react-router-dom";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));
    setCreds({
      email: "",
      password: "",
    });
  };

  if (auth._id) return <Navigate to="/" />;
  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">SignIn</Typography>
        <TextField
          id="Enter e-mail"
          label="Enter e-mail"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <TextField
          id="Enter Password"
          type="password"
          label="Enter password"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={classes.spacing}
        >
          SignIn
        </Button>
      </form>
    </>
  );
};

export default SignIn;
