import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './signin.css';


function Signin() {
  return (
    <Container className="App" component="main" maxWidth="xs">
      <Grid >
        <Avatar 
        sx={{ m: 1, bgcolor: 'secondary.main' }}
        className='Avatar'>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" className='name'>
          Sign in
        </Typography>
      </Grid>
      <Box className="box">
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus>
        </TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password">
        </TextField>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
        >
          Sign In
        </Button>
        <Grid className="bottom">
          <Grid >
            <Link href="#" variant="body3">
              Forgot password?
            </Link>
          </Grid>
          <Grid >
            <Link href="#" variant="body3">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Signin;
