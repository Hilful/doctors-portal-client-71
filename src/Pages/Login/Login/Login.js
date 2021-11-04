import React, { useState } from 'react';
import {Alert, Button, CircularProgress, Container, Grid, TextField, Typography} from '@mui/material';
import login from '../../../images/login.png';
import { NavLink , useLocation , useHistory} from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const Login = () => {
    const [loginData , setLoginData] = useState({});
    const {user , loginUser , isLoading , authError} = useAuth();

     const location = useLocation();
     const history = useHistory();

const handleOnChange = e =>{
    
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData); 

        
}

const handleLoginSubmit = e =>{
    
    loginUser(loginData.email ,loginData.password ,location , history);
    
    e.preventDefault();
}


    return (
        <Container>
            <Grid container spacing={2}>
                    <Grid sx={{mt:8}} item xs={12} md={6}>
                        <Typography variant="body1">
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField 
                            sx={{width:'75%',m:1}}
                            id="standard-basic" 
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange} 
                            variant="standard" />
                            <br />
                            <TextField
                                sx={{width:'75%',m:1}}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" 
                                
                            />
                            
                            <Button 
                            sx={{width:'75%',m:1}}
                             variant="contained"
                             type="submit"
                             
                             >Login</Button>
                             <NavLink style={{textDecoration:'none'}} to="/register">
                                <Button variant="text">New User? Please register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login Successful!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert> }
                            
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width: '100%'}} src={login} alt="" />
                    </Grid>
                    
                    
            </Grid>
        </Container>
    );
};

export default Login;