import React from 'react';
import { Box } from '@mui/material';
import { isEmpty } from 'lodash';
import LandingPageAccordion from './LandingPageAccordion';
import CanShow from '../../../shared/components/CanShow';
import NoDataFound from '../../../shared/components/NoDataFound';

export default function LandingPageBody(props) {
	const { 
		celebritiesRecord,
		isAccordionExpanded,
		isAccordionEdit,
		expandedAccordionIndex,
		handleAccordionChange,
		handleAccordionEdit,
		updateCelebrityRecord,
		deleteCelebrityRecord
	} = props;

	return (
		<Box mt={4}>
			<CanShow show={!isEmpty(celebritiesRecord)} fallbackComponent={<NoDataFound boxHeight='200px' imageStyle='accordionNoDataImageStyle' />}>
				{celebritiesRecord?.map((accordionData, index) => 
					<Box key={index} mt={2}>
						<LandingPageAccordion 
							accordionData={accordionData}
							index={index}
							isAccordionExpanded={isAccordionExpanded}
							isAccordionEdit={isAccordionEdit}
							expandedAccordionIndex={expandedAccordionIndex}
							handleAccordionChange={handleAccordionChange}
							handleAccordionEdit={handleAccordionEdit}
							updateCelebrityRecord={updateCelebrityRecord}
							deleteCelebrityRecord={deleteCelebrityRecord}
						/>
					</Box>
				)}
			</CanShow>
		</Box>
	)
}
