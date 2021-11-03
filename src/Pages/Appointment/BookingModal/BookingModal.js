import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({date, openBooking,handleBookingClose,booking}) => {
    const {name , time}=booking;
    const handleBookingSubmit = e =>{
        alert("Submitting");

        //Collect data 
        //Send data to the server


        handleBookingClose();
        e.preventDefault();
    }
    
        
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openBooking}>
            <Box sx={style}>
                <form onSubmit={handleBookingSubmit}>
                <TextField
                    disabled
                    id="outlined-size-small"
                    sx={{width : '90%' , m :1}}
                    defaultValue={time}
                    size="small"
                />
                <TextField
                    
                    id="outlined-size-small"
                    sx={{width : '90%' , m :1}}
                    defaultValue="Your Name"
                    size="small"
                />
                <TextField
                    
                    id="outlined-size-small"
                    sx={{width : '90%' , m :1}}
                    defaultValue="Phone Number"
                    size="small"
                />
                <TextField
                    
                    id="outlined-size-small"
                    sx={{width : '90%' , m :1}}
                    defaultValue="Email"
                    size="small"
                />
                <TextField
                    disabled
                    id="outlined-size-small"
                    sx={{width : '90%' , m :1}}
                    defaultValue={date.toDateString()}  
                    size="small"
                />
                <Button type="submit" variant="contained">Submit</Button>

                </form>
            </Box>
            </Fade>
      </Modal>
    );
};

export default BookingModal;