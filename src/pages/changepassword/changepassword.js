
import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import './changepassword.css';




const Change = () => {
  return (
    <Container component="main" maxWidth="xs" className="App">
      <Grid>
        <Link style={{
          marginBottom: '20px'
        }} href="#">
          <KeyboardBackspaceOutlinedIcon />
        </Link>
        <Typography variant="h5">
          Reset Password
        </Typography>
      </Grid>
      <Box>
        <TextField
          label="Current Password"
          type="password"
          required
          size="small"
          margin="normal"
          id="password"
          fullWidth
        >
        </TextField>
        <TextField
          label="New Password"
          type="password"
          required
          size="small"
          margin="normal"
          id="password"
          fullWidth
        >
        </TextField>
        <TextField
          label="Confirm New Password"
          type="password"
          required
          size="small"
          margin="normal"
          id="password"
          fullWidth
        >
        </TextField>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          className="btn"
        >
          Update password
        </Button>
      </Box>
    </Container>
  );
};

export default Change;
