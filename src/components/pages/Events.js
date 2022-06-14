import React from 'react'
import './Events.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Events() {
  

  return (
    <div className='App'>
      <Card sx={{ mx: 'auto', maxWidth: 900 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          OUR EVENTS
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Stay tuned for events coming up! 
         If you are intesrested in adding your name click 
         the link below! and we will be in touch.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add Your Name</Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default Events;

