import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import { AccordionActions, AccordionDetails, AccordionSummary } from '@mui/material';

export default function AppAccordion(props) {
	const {
		isRounded,
		isExpanded,
		onChange,
		expandIcon,
		keyIndex,
		accordionSummaryStyle,
		accordionSummary,
		accordionDetails,
		accordionActions
	} = props;

  return (
    <Accordion key={keyIndex} square={isRounded} expanded={isExpanded} onChange={onChange}>
			<AccordionSummary
				expandIcon={expandIcon}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
				sx={{ ...accordionSummaryStyle }}
			>
				{accordionSummary}
			</AccordionSummary>
			<AccordionDetails>
				{accordionDetails}
			</AccordionDetails>
			<AccordionActions>
				{accordionActions}
			</AccordionActions>
		</Accordion>
  );
}
