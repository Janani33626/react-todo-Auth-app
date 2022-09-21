import React from "react";
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyles: {
    color: "#fafafa",
    textDecoration: "none",
  },
});

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);

  console.log(state);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/signin");
  };
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link className={classes.linkStyles} to="/">
              To-Do App
            </Link>
          </Typography>
          {auth._id ? (
            <>
              <Typography className={classes.root} variant="subtitle2">
                Logged in as {auth.name}
              </Typography>
              <Button color="inherit" onClick={() => handleSignOut()}>
                SignOut
              </Button>
            </>
          ) : (
            <>
              <Button>
                <Link className={classes.linkStyles} to="/signin">
                  SignIn
                </Link>
              </Button>
              <Button>
                <Link className={classes.linkStyles} to="/signup">
                  SignUp
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
