import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { isEqual } from 'lodash';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CanShow from '../../../shared/components/CanShow';
import { getAgeFromDOB } from '../../../shared/utils/helper';
import AppModal from '../../../shared/components/AppModal';
import AppButton from '../../../shared/components/AppButton';

export default function AccordionActions(props) {
	const { 
		accordionData, 
		isAccordionEdit, 
		handleAccordionEdit,
		accordionDataForm,
		updateCelebrityRecord,
		deleteCelebrityRecord,
		handleRevertToPreviousDataOnEditCancel
	} = props;

	const [{ isDeleteModal, handleDeleteModal }, setModalDetails] = useState({
		isDeleteModal: false,
		handleDeleteModal: () => setModalDetails(prevDetails => ({
			...prevDetails,
			isDeleteModal: !prevDetails?.isDeleteModal,
		}))
	});

	const isUserAdult = () => getAgeFromDOB(accordionData?.dob) >= 18;

	const handleDelete = () => {
		handleDeleteModal();
		deleteCelebrityRecord(accordionData?.id);
	}

	const isValueFilled = () => accordionDataForm?.isValid && !isEqual(accordionData, accordionDataForm?.values);

	return (
		<>
			<CanShow 
				show={!isAccordionEdit} 
				fallbackComponent={
					<>
						<HighlightOffRoundedIcon 
							sx={{ color: '#FF0000', cursor: 'pointer' }} 
							onClick={() => handleRevertToPreviousDataOnEditCancel()} 
						/>
						<CheckCircleOutlineRoundedIcon 
							sx={{ 
								color: '#008000', 
								cursor: isValueFilled() ? 'pointer' : 'not-allowed',
								opacity: !isValueFilled() && 0.3
							}} 
							onClick={() => isValueFilled() && updateCelebrityRecord(accordionDataForm?.values)} 
						/>
					</>
				}	
				>
					<DeleteIcon 
						sx={{ color: '#FF0000', cursor: 'pointer' }} 
						onClick={handleDeleteModal} 
					/>
					<EditIcon 
						sx={{ 
							color: '#0000FF', 
							cursor: isUserAdult() ? 'pointer' : 'not-allowed',
							opacity: !isUserAdult() && 0.3
						}} 
						onClick={() => isUserAdult() && handleAccordionEdit(true)} 
					/>
			</CanShow>
			<CanShow show={isDeleteModal}>
				<AppModal
					open={isDeleteModal}
					handleModal={handleDeleteModal}
					isCloseIcon
					maxWidth="md"
					isFullWidth
					paperProps={{
						sx: {
							padding: '18px',
							borderRadius: '12px',
							margin: '40px',
						},
					}}
				>
					<Typography variant='p4_medium'>Are you sure you want to delete?</Typography>
					<Box display='flex' justifyContent='flex-end' mt={4}>
						<AppButton 
							onClick={handleDeleteModal} 
							variant="outlined"
							sx={{ width: '128px' }}
						>
							<Typography variant='p4_medium' color='#000'>Cancel</Typography>
						</AppButton>
						<AppButton 
							onClick={handleDelete}
							variant="contained"
							sx={{ 
								width: '128px',
								marginLeft: '10px',
								backgroundColor: '#FF0000',

								'&:hover': {
									backgroundColor: '#FF0000',
								},
							}}
						>
							<Typography variant='p4_medium'>Delete</Typography>
						</AppButton>
					</Box>
				</AppModal>	
			</CanShow>
		</>
	)
}
