import { Box, Typography } from '@mui/material';
import React from 'react';

const Temp = ({ children, head, paragraph }) => {
  return (
    <Box sx={{textAlign:'center',padding:{xs:"10px",sm:'20px'}}}>
      <Typography variant="h4">{head}</Typography>
      <Typography variant="body1">{paragraph}</Typography>
      {children}
    </Box>
  );
}

export default Temp;
