import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import LandingPageSearch from '../features/LandingPageSearch';
import LandingPageBody from '../features/LandingPageBody';
import CelebritiesData from '../../../shared/constants/celebrities.json';
import './landingPage.scss';

export default function LandingPage() {
	const [celebritiesRecord, setCelebritiesRecord] = useState(CelebritiesData);
	const [masterRecord, setMasterRecord] = useState(CelebritiesData);
	const [{ isAccordionExpanded, expandedAccordionIndex, handleAccordionChange }, setAccordionDetails] = useState({
		isAccordionExpanded: false,
		expandedAccordionIndex: '',
		handleAccordionChange: (panelIndex, isAccordionExpanded) => {
			if (isAccordionExpanded) handleAccordionEdit(false);

			setAccordionDetails(prevDetails => ({
				...prevDetails,
				isAccordionExpanded: isAccordionExpanded,
				expandedAccordionIndex: panelIndex
			}))
		}
	});
	const [{ isAccordionEdit, handleAccordionEdit }, setAccordionEditDetails] = useState({
		isAccordionEdit: false,
		handleAccordionEdit: (isEdit) => setAccordionEditDetails(prevDetails => ({
			...prevDetails,
			isAccordionEdit: isEdit,
		}))
	});

	const handleCelebrityRecordSearch = (celebrityName) => {
		if (isAccordionEdit) {
			handleAccordionEdit(false);
			handleAccordionChange(null, false);
		}

		if (isEmpty(celebrityName)) setCelebritiesRecord(masterRecord);
		else setCelebritiesRecord(masterRecord?.filter(data => {
			const completeName = `${data?.first?.toLowerCase()} ${data?.last?.toLowerCase()}`;
			return completeName.includes(celebrityName?.toLowerCase().trim())
		}));
	}

	const updateCelebrityRecord = (updatedData) => {
		const filteredData = masterRecord?.map((data) => {
			if (data?.id === updatedData?.id) {
				return updatedData;
			}

			return data;
		})

		setCelebritiesRecord(filteredData);
		setMasterRecord(filteredData );
		handleAccordionEdit(false);
	};

	const deleteCelebrityRecord = (deleteId) => {
		const filteredData = masterRecord?.filter(data => data?.id !== deleteId);

		setCelebritiesRecord(filteredData);
		setMasterRecord(filteredData );
		handleAccordionEdit(false);
	}

	return (
		<Stack padding='20px 100px'>
			<Box maxWidth='60%'>
				<Typography variant='p4_bold' mt={8}>List view</Typography>
				<LandingPageSearch handleCelebrityRecordSearch={handleCelebrityRecordSearch} />
				<LandingPageBody 
					celebritiesRecord={celebritiesRecord} 
					isAccordionExpanded={isAccordionExpanded}
					isAccordionEdit={isAccordionEdit}
					expandedAccordionIndex={expandedAccordionIndex}
					handleAccordionChange={handleAccordionChange}
					handleAccordionEdit={handleAccordionEdit}
					updateCelebrityRecord={updateCelebrityRecord}
					deleteCelebrityRecord={deleteCelebrityRecord}
				/>
			</Box>
		</Stack>
	)
}
