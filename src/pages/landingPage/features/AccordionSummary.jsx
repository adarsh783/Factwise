import React from 'react';
import { Avatar, Typography } from '@mui/material';

export default function AccordionSummary(props) {
	const { accordionData } = props;

	return (
		<>
			<Avatar sx={{ height: '60px', width: '60px' }}/>
			<Typography variant='p4_bold' mt={1} ml={2}>{`${accordionData?.first} ${accordionData?.last}`}</Typography>
		</>
	)
}
