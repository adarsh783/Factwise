import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';
import AppAccordion from '../../../shared/components/AppAccordion';
import AccordionActions from './AccordionActions';
import AccordionDetails from './AccordionDetails';
import AccordionSummary from './AccordionSummary';

export default function LandingPageAccordion(props) {
	const { 
		accordionData,
		index,
		isAccordionExpanded,
		isAccordionEdit,
		expandedAccordionIndex,
		handleAccordionChange,
		handleAccordionEdit,
		updateCelebrityRecord,
		deleteCelebrityRecord
	} = props;

	const accordionDataForm = useFormik({
    initialValues: {
			...accordionData,
			dob: accordionData?.dob
		},
    validationSchema: () => {
      return Yup.lazy((values) => {
        return Yup.object().shape({
          description: Yup.string().required('Description required'),
          country: Yup.string().required('Country required'),
          gender: Yup.string().required('Class range should be selected'),
          // dob: Yup.number().required('DOB required'),
        });
      });
    },
    enableReinitialize: true,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
  });

	const isExpandedAccordion = (accordionIndex) => isAccordionExpanded && expandedAccordionIndex === accordionIndex;

	const handleCurrentAccordionDetailsEdit = (key, value) => accordionDataForm.setFieldValue(key, value);

	const handleRevertToPreviousDataOnEditCancel = () => {
		accordionDataForm.setValues(accordionData);
		handleAccordionEdit(false);
	}

	return (
		<AppAccordion 
			isRounded={true} 
			isExpanded={isExpandedAccordion(accordionData?.id)} 
			onChange={() => !isAccordionEdit && handleAccordionChange(accordionData?.id, !isAccordionExpanded)}
			keyIndex={index}
			expandIcon={isExpandedAccordion(accordionData?.id) ? <HorizontalRuleIcon /> : <AddIcon />}
			accordionSummaryStyle={{
				padding: '15px 20px',
				border: 0
			}}
			accordionSummary={
				<AccordionSummary 
					accordionData={accordionData} 
				/>
			}
			accordionDetails={
				<AccordionDetails 
					accordionData={accordionData} 
					accordionDataForm={accordionDataForm}
					isAccordionEdit={isAccordionEdit}
					handleCurrentAccordionDetailsEdit={handleCurrentAccordionDetailsEdit}
				/>
			}
			accordionActions={
				<AccordionActions 
					accordionData={accordionData} 
					isAccordionEdit={isAccordionEdit}
					handleAccordionEdit={handleAccordionEdit}
					updateCelebrityRecord={updateCelebrityRecord}
					deleteCelebrityRecord={deleteCelebrityRecord}
					handleRevertToPreviousDataOnEditCancel={handleRevertToPreviousDataOnEditCancel}
					accordionDataForm={accordionDataForm}
				/>
			}
		/>
	)
}
