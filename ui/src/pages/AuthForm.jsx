import React, { useState } from 'react';
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
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
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
                <form noValidate>
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Email"
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
                        variant="outlined"
                        type="password"
                        required
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item>
                      <Button fullWidth variant="contained" sx={{ background: '#57564F' }}>
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
                <form noValidate>
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        required
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Email"
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
                        variant="outlined"
                        type="password"
                        required
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item>
                      <Button fullWidth variant="contained" sx={{ background: '#57564F' }}>
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
