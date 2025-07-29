import React, { useState } from 'react';
import { AuthStore } from '../statemanagement/auth.store';
import axios from "axios"
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  Box
} from '@mui/material';

export const AuthForm = () => {


  let {signUp,signup_msg} = AuthStore();

  console.log(signup_msg);
  


  const [tab, setTab] = useState(0);

  // Sign Up form state as a single object
  const [signup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Sign In form state (optional if you plan to collect it too)
  const [signin, setSignin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  // Handle changes for signup form
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignup((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle changes for signin form
  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    setSignin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit handlers
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', signup);

    signUp(signup)

   
    
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    console.log('Signin data:', signin);
  };

  const textFieldStyles = {
    '& label': {
      color: '#57564F',
    },
    '& label.Mui-focused': {
      color: '#57564F',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: '#57564F',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#57564F',
      },
    },
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh', backgroundColor: '#f5f5f5' }}
    >
      <Grid item xs={11} sm={8} md={5}>
        <Paper elevation={4} sx={{ padding: 4 }}>
          <Tabs value={tab} onChange={handleChange} centered textColor="inherit" indicatorColor="secondary">
            <Tab label="Sign In" />
            <Tab label="Sign Up" />
          </Tabs>

          <Box mt={3}>
            {tab === 0 ? (
              <>
                <Typography variant="h5" align="center" gutterBottom>
                  Sign In
                </Typography>
                <form noValidate onSubmit={handleSigninSubmit}>
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={signin.email}
                        onChange={handleSigninChange}
                        variant="outlined"
                        type="email"
                        required
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        value={signin.password}
                        onChange={handleSigninChange}
                        variant="outlined"
                        type="password"
                        required
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item>
                      <Button type="submit" fullWidth variant="contained" sx={{ background: '#57564F' }}>
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </>
            ) : (
              <>
                <Typography variant="h5" align="center" gutterBottom>
                  Sign Up
                </Typography>
                <form noValidate onSubmit={handleSignupSubmit}>
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={signup.name}
                        onChange={handleSignupChange}
                        variant="outlined"
                        required
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={signup.email}
                        onChange={handleSignupChange}
                        variant="outlined"
                        type="email"
                        required
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        value={signup.password}
                        onChange={handleSignupChange}
                        variant="outlined"
                        type="password"
                        required
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item>
                      <Button type="submit" fullWidth variant="contained" sx={{ background: '#57564F' }}>
                        Register
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </>
            )}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
