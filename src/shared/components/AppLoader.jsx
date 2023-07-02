import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function Loader({ height }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
