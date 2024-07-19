import React from 'react';
import { Button, Box, Checkbox } from '@mui/material';

const Buttons = () => {
  const buttonLabels = ['Done', 'Done', 'Done'];

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: '10px',
      border: '2px dashed #800080'
    }}>
      {buttonLabels.map((label, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="contained"
            sx={{
              width: '100%',
              backgroundColor: '#FFFF00', // Yellow color
              '&:hover': {
                backgroundColor: '#FFFF66', // Light yellow color on hover
              },
              color: 'black' // Set text color to black
            }}
          >
            {label}
          </Button>
          <Checkbox sx={{ marginLeft: '10px' }} />
        </Box>
      ))}
    </Box>
  );
};

export default Buttons;
