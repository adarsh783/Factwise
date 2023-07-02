import React from 'react';
import { Box } from '@mui/material';
import NoDataImg from '../../assets/img/noData.jpg';
import CustomImage from './CustomImage';

function NoDataFound(props) {
  const { boxHeight, imageStyle } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: boxHeight,
      }}
    >
      <CustomImage src={NoDataImg} imageStyle={imageStyle} alt="nodata" />
    </Box>
  );
}

export default NoDataFound;
