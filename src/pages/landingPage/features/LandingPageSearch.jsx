import React from 'react';
import { InputAdornment, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchBox from '../../../shared/components/AppSearchBox';

export default function LandingPageSearch(props) {
	const { handleCelebrityRecordSearch } = props;

	return (
		<Box mt={2}>
			<SearchBox
				placeholder='Search user by name'
				onChange={(event) => handleCelebrityRecordSearch(event?.target?.value)}
				startAdornment={
					<InputAdornment position="start">
						<IconButton aria-label="toggle password visibility" edge="end">
							<SearchIcon />
						</IconButton>
					</InputAdornment>
				}
			/>
		</Box>
	)
}
