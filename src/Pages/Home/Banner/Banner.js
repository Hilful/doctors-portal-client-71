import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';
const bannerBg = {
    background : `url(${bg})`,
    
}

const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: 'center'
}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item  xs={12} md={6} style={{...verticalCenter,textAlign: 'left'}}>
            <Box>
            <Typography variant="h3">
                Your New Smile
                <br />
                Starts Here
            </Typography>
            <Typography variant="h6" sx={{my:3 ,fontSize:13,color: 'gray',fontWeight: 300}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore debitis illum in animi, dolorum vel voluptatibus recusandae laboriosam nobis quam.
            </Typography >
            <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }} >
                Get Appointment

            </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter} >
              <img style={{width: '350px'}} src={chair} alt="" />
            
          </Grid>
          
        </Grid>
      </Container>
    );
};

export default Banner;