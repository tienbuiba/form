import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import KeyIcon from '@mui/icons-material/Key';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './forgotpassword.css';


function Forgot() {
  return (
    <Container className="App" component="main" maxWidth="xs">
      <Grid >
        <Grid className='icon'>< KeyIcon /></Grid>
        <Typography variant="h5" className='name'>
          Forgot password?
        </Typography>
        <Typography variant="h6" className='title'>
          No worries, well send your reset intructions
        </Typography>
      </Grid>
      <Box className="box">
        <TextField
          margin="normal"
          required
          fullWidth
          label="Enter your email"
          type="email"
          id="email"
          autoComplete="current-password"
          className="textfield">
        </TextField>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="button"
        >
          Reset Password
        </Button>
        <Grid className="bottom">
          <Button>
            <ArrowBackIcon />Back to log in</Button>
        </Grid>
      </Box>
    </Container>
  );
}

export default Forgot;