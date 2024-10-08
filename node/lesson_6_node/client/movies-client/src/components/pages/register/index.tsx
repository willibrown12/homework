

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Password } from '@mui/icons-material';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();



  


export default function Register() {
 async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('username'),
      password: data.get('password'),
      
    });
    console.log(data);
    
    const result = await fetch(`http://localhost:3500/auth/register`, {
        method: "post",
        body: JSON.stringify({username:data.get('username'),Password:data.get('password')}),
        headers: { "content-type": "application/json" }
    })
    const r = await result.text()
    console.log(r)
    alert("Success!!")
    return r;
  };

  return (
    
      <Container component="main" maxWidth="xs" style={{backgroundColor:"white"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{color:"black"}}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
        
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
           
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
   
  );
}