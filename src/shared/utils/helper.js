import dayjs from 'dayjs';
import { numberRegex, stringRegex } from '../constants/validation.const';

export const isNumber = (char) => {
	const isValidNumber = numberRegex?.test(char);

	if (isValidNumber) return true;
	return false;
};

export const isStringWithoutNumber = (char) => {
	const isValidString = stringRegex?.test(char);

	if (isValidString) return true;
	return false;
};

export const getAgeFromDOB = (dob) => {
	const [year, month, date] = dob.split('-');
	const dayjsBirthday = dayjs(`${year}-${month}-${date}`);
	const ageDifference = dayjs().diff(dayjsBirthday, 'year');

	return ageDifference;
}
