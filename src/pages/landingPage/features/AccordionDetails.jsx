import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FormField from '../../../shared/components/AppFormField';
import SelectDropDown from '../../../shared/components/AppDropdown';
import { celebrityGenderOptions } from '../../../shared/constants/constants';
import { getAgeFromDOB } from '../../../shared/utils/helper';
import CanShow from '../../../shared/components/CanShow';

export default function AccordionDetails(props) {
	const { accordionData, accordionDataForm, isAccordionEdit, handleCurrentAccordionDetailsEdit } = props;

	const getGender = () => celebrityGenderOptions?.find(data => data?.value === accordionDataForm?.values?.gender);

	return (
		<Box ml={1}>
			<Grid container spacing={2}>
				<Grid item md={4} lg={4} xl={4}>
					<Typography variant='p4_medium' color='#808080' mb={1}>Age</Typography>
					<CanShow 
						show={isAccordionEdit}
						fallbackComponent={
							<Typography variant='p4_medium' mt={1}>{getAgeFromDOB(accordionData?.dob)} Years</Typography>
						}
					>
						<FormField
							placeholder='YYYY-MM-DD' 
							feildType='number'
							value={getAgeFromDOB(accordionData?.dob)}
							// onChange={(event) => handleCurrentAccordionDetailsEdit('dob', event?.target?.value)}
							// InputProps={{
							// 	sx: { border: accordionDataForm?.errors?.dob && '1px solid red' },
							// }}
						/>
					</CanShow>
				</Grid>
				<Grid item md={4} lg={4} xl={4}>
					<Typography variant='p4_medium' color='#808080' mb={1}>Gender</Typography>
					<CanShow 
						show={isAccordionEdit}
						fallbackComponent={
							<Typography variant='p4_medium' mt={1}>{accordionData?.gender}</Typography>
						}
					>
						<SelectDropDown
							labelKey='label'
							placeholder='Select gender' 
							options={celebrityGenderOptions}
							value={accordionDataForm?.values?.gender ? getGender() : ''}
							onChange={(event, selectedDetails) => handleCurrentAccordionDetailsEdit('gender', selectedDetails?.value)}
						/>
					</CanShow>
				</Grid>
				<Grid item md={4} lg={4} xl={4}>
					<Typography variant='p4_medium' color='#808080' mb={1}>Country</Typography>
					<CanShow 
						show={isAccordionEdit}
						fallbackComponent={
							<Typography variant='p4_medium' mt={1}>{accordionData?.country}</Typography>
						}
					>
						<FormField
							placeholder='Enter Country' 
							value={accordionDataForm?.values?.country}
							onChange={(event) => handleCurrentAccordionDetailsEdit('country', event?.target?.value)}
							InputProps={{
								sx: { border: accordionDataForm?.errors?.country && '1px solid red' },
							}}
						/>
					</CanShow>
				</Grid>
			</Grid>
			<Typography variant='p4_medium' color='#808080' mt={4} mb={1}>Description</Typography>
			<CanShow 
				show={isAccordionEdit}
				fallbackComponent={
					<Typography variant='p4_medium' mt={1}>{accordionData?.description}</Typography>
				}
			>
				<FormField
					placeholder='Enter Description' 
					multiline={true}
					maxRows={5}
					value={accordionDataForm?.values?.description}
					onChange={(event) => handleCurrentAccordionDetailsEdit('description', event?.target?.value)}
					InputProps={{
						sx: {
							borderRadius: '12px !important',
							height: '135px',
							border: 'none',
							padding: '10px',
							border: accordionDataForm?.errors?.description && '1px solid red'
						},
					}}
				/>
			</CanShow>
		</Box>
	)
}
